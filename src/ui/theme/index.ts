const DATA_THEME = 'data-theme';

export enum Type {
  DARK = 'dark',
  LIGHT = 'light',
  MIDNIGHT = 'midnight',
  GREEN_NIGHT = 'green-night'
}

export function setTheme(theme: Type) {
  document.documentElement.setAttribute(DATA_THEME, theme);
}

export function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute(DATA_THEME);
  if (currentTheme !== Type.DARK) {
    setTheme(Type.DARK);
    return;
  }

  setTheme(Type.LIGHT);
}
