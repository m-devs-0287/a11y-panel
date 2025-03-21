const themePaths = {
  default: "src/themes/css/default.css",
  dark: "src/themes/css/dark.css",
  light: "src/themes/css/light.css",
};


export const applyTheme = (theme) => {
  let themePath;

  // Check if theme is an object with a custom path
  if (typeof theme === "object" && theme.path) {
    themePath = theme.path;
  } else {
    themePath = themePaths[theme] || themePaths.default;
  }

  // Find or create the <link> tag for the theme
  let themeLink = document.querySelector("#theme-link");

  if (!themeLink) {
    themeLink = document.createElement("link");
    themeLink.id = "theme-link";
    themeLink.rel = "stylesheet";
    document.head.appendChild(themeLink);
  }

  themeLink.href = themePath;
};

export default applyTheme;
