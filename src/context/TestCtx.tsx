import React from "react";

interface theme {
    light: string
    dark: number
}
const test: theme = {
    light: "aaaa",
    dark: 8
}
export const ThemeCtx = React.createContext(test)