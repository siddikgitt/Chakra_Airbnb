import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "./theme/theme";

const colors = {
  brand: {
    900: "red",
    800: "#153e75",
    700: "#2a69ac"
  }
};

// const theme = extendTheme({ colors });

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
