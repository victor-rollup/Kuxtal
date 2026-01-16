type theme_type = 'dark' | 'light';
const DATA_THEME = 'data-theme';

export enum Type {
  DARK = 'dark',
  LIGHT = 'light',
}

export function setTheme(theme: theme_type) {
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
