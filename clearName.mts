const fs = require('fs');
const path = require('path');

// Function to remove prefix and suffix from SVG file names
const clearNames = (directory) => {
    // Read all SVG files in the directory
    const svgFiles = fs.readdirSync(directory).filter(file => file.endsWith('.svg'));

    svgFiles.forEach(file => {
        const filePath = path.join(directory, file);
        const fileName = path.parse(file).name;

        // Remove any occurrences of "undraw_" prefix
        const newName = fileName.replace(/undraw_/g, '');

        // Remove "_re" suffix and everything after it
        const finalName = newName.replace(/_re[^.]*$/g, '');

        if (finalName !== fileName) {
            const newFilePath = path.join(directory, finalName + '.svg');

            // Check if the new file name already exists
            if (fs.existsSync(newFilePath)) {
                // If exists, remove the file
                fs.unlinkSync(filePath);
                console.log(`Duplicate file "${file}" removed.`);
            } else {
                // Rename the file
                fs.renameSync(filePath, newFilePath);
                console.log(`File "${file}" renamed to "${finalName}.svg"`);
            }
        }
    });
}

// Main function
const main = () => {
    const svgDir = './convert';
    clearNames(svgDir);
}

// Run the main function
main();
