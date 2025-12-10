import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {recaptchaSiteKey ? (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey} language="en">
          <App />
        </GoogleReCaptchaProvider>
      ) : (
        <App />
      )}
    </ThemeProvider>
  </React.StrictMode>
);
