import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "#FC724D",
    textPrimary: "#FC724D",
    textSecondary: "#252B42",
    textTertiary: "#737373",
    light: "#FFFFFF",
    backgroundColor: "#FFFAF9",
  },
  fonts: ["Montserrat", "Roboto"],
  fontSizes: {
    h1: "1em",
    h2: "2em",
    h3: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
