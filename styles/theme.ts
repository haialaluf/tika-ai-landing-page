export const theme = {
  colors: {
    tika: {
      black: "#0a0a0a",
      dark: "#121212",
      gray: "#262626",
      accent: "#3b82f6",
      white: "#ffffff",
    },
    white: "#ffffff",
    black: "#000000",
    gray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    green: {
      500: "#22c55e",
    },
    red: {
      100: "#fee2e2",
      300: "#fca5a5",
      800: "#991b1b",
    },
    blue: {
      900: "#1e3a8a",
    },
    purple: {
      900: "#581c87",
    },
  },
  font: {
    sans: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
} as const;
