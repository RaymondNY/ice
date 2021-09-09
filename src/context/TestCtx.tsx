import React from "react";

interface theme {
  light: string;
  dark: number;
}
const test: theme = {
  light: "aaa",
  dark: 0,
};
export const ThemeCtx = React.createContext(test);
