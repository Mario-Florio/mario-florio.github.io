import { THEMES, getTheme, setTheme } from './local-storage.js';
import { applyTheme } from './theme-handler.js';

// HTML Elements
const darkModeCheckbox = document.getElementById("dark-mode");
const slider = document.querySelector(".slider");

(function initialize() {
    const theme = getTheme();

    switch(theme) {
        case THEMES.DARK:
            darkModeCheckbox.checked = true;
            slider.dataset.on = "true";
            break;
        
        default:
            darkModeCheckbox.checked = false;
            slider.dataset.on = "false";
    }
})();

slider.addEventListener('click', (e) => {
    darkModeCheckbox.checked = !darkModeCheckbox.checked;

    if (darkModeCheckbox.checked === true) {
        setTheme(THEMES.DARK);
        applyTheme(THEMES.DARK);
        slider.dataset.on = "true";

    } else if (darkModeCheckbox.checked === false) {
        setTheme(THEMES.DEFAULT);
        applyTheme(THEMES.DEFAULT);
        slider.dataset.on = "false";
    }

});
