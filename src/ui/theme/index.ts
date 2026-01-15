type theme_type = 'dark' | 'light' | 'aqua' | 'solaris';
const DATA_THEME = 'data-theme';

export enum Type {
  DARK = 'dark',
  LIGHT = 'light',
  AQUA = 'aqua',
  SOLARIS = 'solaris',
}

export function setTheme(theme: theme_type) {
  document.body.setAttribute(DATA_THEME, theme);
}

export function toggleDarkMode() {
  const currentTheme = document.body.getAttribute(DATA_THEME);
  if (currentTheme !== Type.DARK) {
    setTheme(Type.DARK);
    return;
  }
  
  setTheme(Type.LIGHT);
}
