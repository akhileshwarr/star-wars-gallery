import React from 'react';

export const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
      backgroundCard: "gray"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
      backgroundCard: "black"

    }
  };
  
  export const ThemeContext = React.createContext(themes.dark);

   
