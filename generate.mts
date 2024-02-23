const fs = require('fs');
const path = require('path');

// Function to convert kebab-case or snake_case to camelCase
const kebabToCamelCase = (str) => {
  // Convert kebab-case to camelCase and capitalize first letter
  const camelCase = str.replace(/[-_]+([a-z])/g, (_, letter) => letter.toUpperCase());
  // Sanitize by removing all non-alphabetic characters
  const sanitized = camelCase.replace(/[^a-zA-Z]/g, '');

  return sanitized.charAt(0).toUpperCase() + sanitized.slice(1);
};

// Function to read all SVG files in the illustrations directory
const readSVGFiles = (directory) => {
  const svgFiles = fs.readdirSync(directory).filter(file => file.endsWith('.svg'));
  return svgFiles;
}

// Function to modify SVG content
const modifySVGContent = (svgFilePath, componentName) => {
  let svgContent = fs.readFileSync(svgFilePath, 'utf8');

  // Array of attributes to ignore during camelCase conversion
  const ignoreList = ['data-name'];

  // Modify SVG content as needed
  svgContent = svgContent.replace('<svg ', '<svg {...{ style }} ');
  svgContent = svgContent.replace(/width="[^"]*" /g, '');
  svgContent = svgContent.replace(/fill="#6d07e8"/g, 'fill={color}');
  svgContent = svgContent.replace(/fill="#6c63ff"/g, 'fill={color}');
  svgContent = svgContent.replace(/height="([^"]*)"/g, `height={size}`);
  svgContent = svgContent.replace(/xmlns:xlink/g, 'xmlnsXlink');
  svgContent = svgContent.replace(/xmlns:xlink/g, 'xmlnsXlink');
  svgContent = svgContent.replace(/isolation="isolate"/g, "style={{ isolation: 'isolate' }}");
  svgContent = svgContent.replace(/style="isolation:isolate"/g, "style={{ isolation: 'isolate' }}");

  // Create a regex pattern to match hyphenated attributes in the format "some-key"
  const regexPattern = /-(?!(?:data-|name))(\w)(?=(?:(?!(?:data-|"))[\w-])+="[^"]*")/g;

  // Replace hyphenated attributes with camelCase, ignoring "data-name" key
  svgContent = svgContent.replace(regexPattern, (_, letter) => {
    return letter.toUpperCase();
  });

  // Define React component
  const reactComponentContent = `
import React from 'react';
import { UndrawSVGProps } from '../types';

const ${componentName}: React.FC<UndrawSVGProps> = ({ color = '#6D07E8', size = 300, style }) => (
    ${svgContent}
);

export default ${componentName};
`;

  return reactComponentContent;
}

const writeReactComponents = (svgFiles, directory, svgDir) => {
  const exportStatements = [''];
  const processedFiles = new Set();

  svgFiles.forEach(file => {
    const svgFilePath = path.join(svgDir, file);

    // Sanitize filename
    const componentName = kebabToCamelCase(path.basename(file, '.svg'));

    // Ensure only unique file names are processed
    if (!processedFiles.has(componentName)) {
      const outputFileName = `${componentName}.tsx`;
      const reactComponentContent = modifySVGContent(svgFilePath, componentName);
      const outputFilePath = path.join(directory, outputFileName);

      // Check if the file already exists
      if (fs.existsSync(outputFilePath)) {
        console.log(`${outputFileName} already exists. Overwriting...`);
      }

      fs.writeFileSync(outputFilePath, reactComponentContent);

      exportStatements.push(`export { default as ${componentName} } from './${componentName}';`);
      processedFiles.add(componentName);
    }
  });

  const indexContent = exportStatements.join('\n');

  fs.writeFileSync(path.join(directory, 'index.ts'), indexContent);
}

// Update types.ts
const updateTypesFile = (svgFiles, typesFilePath) => {
  const illustrations = svgFiles.map(file => {
    // Sanitize filename
    const componentName = kebabToCamelCase(path.basename(file, '.svg'));
    return `"${componentName}"`;
  });

  const typesContent = `export type UndrawSVGProps = {
  color?: string;
  size?: number | string;
  style?: React.CSSProperties;
};

export type Illustrations = ${illustrations.join(' | ')};
`;

  fs.writeFileSync(typesFilePath, typesContent);
}

// Main function
const main = () => {
  const svgDir = './svg';
  const illustrationsDir = './src/illustrations';
  const svgFiles = readSVGFiles(svgDir);
  writeReactComponents(svgFiles, illustrationsDir, svgDir);
  updateTypesFile(svgFiles, './src/types.ts');
}

// Run the main function
main();
