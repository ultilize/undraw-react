# Undraw Illustrations for React!

## Overview
This npm package provides a convenient way to import SVG illustrations from the Undraw Illustrations website as React components. Each illustration can be easily integrated into your React projects using either `<ImageName />` or `<UndrawIllustration name="ImageName" />` syntax. Additionally, you can customize the color, size, and style of each component to suit your needs.

```typescript
type UndrawSVGProps = {
  color?: string;
  size?: number | string;
  style?: React.CSSProperties;
};
```

## Usage
Import the desired illustration component in your React application and use it within your JSX code:

```typescript
import React from 'react';
import { UndrawIllustration, Welcome } from 'undraw-react';

const MyComponent = () => {
  return (
    <div>
      {/* Using <ImageName /> syntax */}
      <Welcome color="blue" size={200} style={{ marginTop: '20px' }} />

      {/* Using <Undraw /> syntax */}
      <UndrawIllustration name="Welcome" color="green" size={300} style={{ marginBottom: '40px' }} />
    </div>
  );
};

export default MyComponent;
```

## Props
You can customize each illustration component using the following props:

- `name`: The name of the illustration.
- `color`: The color of the illustration.
- `size`: The size of the illustration.
- `style`: Custom styles to apply to the illustration.

## Available Illustrations
To find the available illustration names, visit the [Undraw Illustrations](https://undraw.co/illustrations) website and choose the desired illustration. The name of the illustration is in CamelCase format, so `team effort` will be `TeamEffort`.

> **!!!Warning!!!** Not all illustrations are added, if package doesn't contain some illustrations, contact us on github and create an request for them.