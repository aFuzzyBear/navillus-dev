export enum AppTheme {
    light = 'light',
    dark = 'dark'
}

export function toggleTheme(currentTheme: AppTheme) {
    return currentTheme === AppTheme.light ? AppTheme.dark : AppTheme.light;
}

export function getWindowTheme() {
    const prefersDark = window?.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dataTheme = document?.documentElement.getAttribute('data-chisel-theme');

    if (dataTheme) {
        return dataTheme === 'dark' ? AppTheme.dark : AppTheme.light;
    }

    return prefersDark ? AppTheme.dark : AppTheme.light;
}

export function setWindowTheme(theme: AppTheme) {
    document?.documentElement?.setAttribute('data-chisel-theme', theme);
}
