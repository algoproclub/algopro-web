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
  
  const themeToggle = document.querySelector<HTMLButtonElement>('#theme-change-toggle');
  
  const lightButton = themeToggle?.querySelector<HTMLButtonElement>('[data-set-theme="dark"]');
  const darkButton = themeToggle?.querySelector<HTMLButtonElement>('[data-set-theme="light"]');
 
  if (!lightButton || !darkButton || !themeToggle) { return; }
  
  let is_dark = !isDarkThemeSet;
  const changeThemeIcon = (function (){
    return ()=> {
      if (is_dark) {
        lightButton.style.display = 'block';
        darkButton.style.display = 'none';
      } else {
        lightButton.style.display = 'none';
        darkButton.style.display = 'block';
      }
      is_dark = !is_dark;
    };
  })();

  changeThemeIcon();

  themeToggle.addEventListener('click', changeThemeIcon);
}

themeSetup();