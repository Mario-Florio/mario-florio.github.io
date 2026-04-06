
// ENUMS
const THEMES = {
    DEFAULT: 'default',
    DARK: 'dark'
};

// Property Names
const THEME_NAME = 'THEME';

(function initialize() {
    const theme = localStorage.getItem(THEME_NAME);
    setTheme(theme);
})();

function getTheme() {
    return localStorage.getItem(THEME_NAME);
};

function setTheme(theme) {
    if (!is_valid_theme(theme))
        return console.error(`Theme Input Error: ${theme} is not a recognized theme`);

    localStorage.setItem(THEME_NAME, theme);    
};

// UTILS
function is_valid_theme(theme) {
    return Object.values(THEMES).includes(theme);
};

export {
    THEMES,
    getTheme,
    setTheme
};