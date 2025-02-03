/**
 *
 * @param {() => void} onDark
 * @param {() => void} onLight
 */

export const useTheme = (onDark, onLight) => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const colorScheme = e.matches ? "dark" : "light";
      switch (colorScheme) {
        case "light":
          onLight();
          break;
        case "dark":
          onDark();
          break;
        default:
          throw new Error("Impossible situation reached");
      }
    });

  const colorScheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  switch (colorScheme) {
    case "light":
      onLight();
      break;
    case "dark":
      onDark();
      break;
    default:
      throw new Error("Impossible situation reached");
  }
};

export const getCurrentTheme = () => {
  const colorScheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  return colorScheme;
};
