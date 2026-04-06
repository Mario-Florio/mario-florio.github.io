import { THEMES, getTheme } from './local-storage.js';

// HTML Elements
const root = document.querySelector(":root");
const styles = getComputedStyle(root);

// CSS Properties
const THEME_NAME = '--theme';
const THEME_VALUES = {
    DEFAULT: 'default',
    DARK: 'dark'
};
const PRIMARY_BG_COLOR_NAME = '--primary-bg-color';
const PRIMARY_BG_COLOR_VALUES = {
    DEFAULT: styles.getPropertyValue('--primary-default-bg-color').trim(),
    DARK: styles.getPropertyValue('--primary-dark-bg-color').trim()
};
const SECONDARY_BG_COLOR_NAME = '--secondary-bg-color';
const SECONDARY_BG_COLOR_VALUES = {
    DEFAULT: styles.getPropertyValue('--secondary-default-bg-color').trim(),
    DARK: styles.getPropertyValue('--secondary-dark-bg-color').trim()
};
const PRIMARY_FG_COLOR_NAME = '--primary-fg-color';
const PRIMARY_FG_COLOR_VALUES = {
    DEFAULT: styles.getPropertyValue('--primary-default-fg-color').trim(),
    DARK: styles.getPropertyValue('--primary-dark-fg-color').trim()
};
const SECONDARY_FG_COLOR_NAME = '--secondary-fg-color';
const SECONDARY_FG_COLOR_VALUES = {
    DEFAULT: styles.getPropertyValue('--secondary-default-fg-color').trim(),
    DARK: styles.getPropertyValue('--secondary-dark-fg-color').trim()
};
const TARGET_COLOR_NAME = '--target-color';
const TARGET_COLOR_VALUES = {
    DEFAULT: styles.getPropertyValue('--default-target-color').trim(),
    DARK: styles.getPropertyValue('--dark-target-color').trim()
};

(function initialize() {
    const theme = getTheme();
    applyTheme(theme);
})();

function applyTheme(theme) {
    switch(theme) {
        case THEMES.DARK:
            root.style.setProperty(THEME_NAME, THEME_VALUES.DARK);
            root.style.setProperty(PRIMARY_BG_COLOR_NAME, PRIMARY_BG_COLOR_VALUES.DARK);
            root.style.setProperty(SECONDARY_BG_COLOR_NAME, SECONDARY_BG_COLOR_VALUES.DARK);
            root.style.setProperty(PRIMARY_FG_COLOR_NAME, PRIMARY_FG_COLOR_VALUES.DARK);
            root.style.setProperty(SECONDARY_FG_COLOR_NAME, SECONDARY_FG_COLOR_VALUES.DARK);
            root.style.setProperty(TARGET_COLOR_NAME, TARGET_COLOR_VALUES.DARK);
            break;
        
        default:
            root.style.setProperty(THEME_NAME, THEME_VALUES.DEFAULT);
            root.style.setProperty(PRIMARY_BG_COLOR_NAME, PRIMARY_BG_COLOR_VALUES.DEFAULT);
            root.style.setProperty(SECONDARY_BG_COLOR_NAME, SECONDARY_BG_COLOR_VALUES.DEFAULT);
            root.style.setProperty(PRIMARY_FG_COLOR_NAME, PRIMARY_FG_COLOR_VALUES.DEFAULT);
            root.style.setProperty(TARGET_COLOR_NAME, TARGET_COLOR_VALUES.DEFAULT);
    };
};

export {
    applyTheme
};