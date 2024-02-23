import React from "react";
import { Illustrations, UndrawSVGProps } from "./types";

import * as Ills from './illustrations';

export const UndrawIllustration = ({
  name,
  color,
  size,
  style,
}: UndrawSVGProps & { name: Illustrations }) => {
  
  // Find the matching component based on the name prop
  const getComponentByName = (name: Illustrations) => {
    const Component = Ills[name];
    if (Component) {
      return <Component color={color} size={size} style={style} />;
    } else {
      return <span>Undraw not found.</span>;
    }
  };

  return getComponentByName(name);
};
