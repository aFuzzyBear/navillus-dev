export enum AppTheme {
    light = 'light',
    dark = 'dark'
}

export function toggleTheme(currentTheme: AppTheme) {
    return currentTheme === AppTheme.light ? AppTheme.dark : AppTheme.light;
}

export function getWindowTheme() {
    const prefersDark = window?.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? AppTheme.dark : AppTheme.light;
}

export function setWindowTheme(theme: AppTheme) {
    document?.documentElement?.setAttribute('data-chisel-theme', theme);
}
