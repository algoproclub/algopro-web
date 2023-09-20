import './styles.css';

import { themeChange } from 'theme-change';

/**
 * Set up the theme if the user has set it if not use os default
 * @date 9/20/2023 - 10:19:15 PM
 */
function themeSetup():void {
  themeChange();
  
  const savedTheme = localStorage.getItem('theme');
  const osPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDarkThemeSet = (!savedTheme && osPreferDark) || savedTheme === 'dark';

  const themeToggle = document.querySelector<HTMLInputElement>('#theme-change-toggle');
  
  if (themeToggle) {
    themeToggle.checked = isDarkThemeSet;
  }
}

themeSetup();