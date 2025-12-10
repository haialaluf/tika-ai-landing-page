/// <reference types="vite/client" />

import "styled-components";

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
  readonly GEMINI_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// We intentionally keep styled-components theme untyped to avoid TS noise.
// If you want full IntelliSense/type-safety for theme, reintroduce a typed module augmentation.
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Record<string, any> {}
}
