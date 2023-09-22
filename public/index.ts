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

class TypeAnimator {
  texts: string[];
  el: HTMLSpanElement;
  loopNum: number;
  period: number;
  txt: string;
  isDeleting: boolean;

  constructor(el: HTMLSpanElement, texts: string[], period: number) {
    this.texts = texts;
    this.el = el;
    this.loopNum = 0;
    this.period = period;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.texts.length;
    const fullTxt = this.texts[i];
  
    this.txt = fullTxt.substring(0, this.txt.length + (this.isDeleting ? -1 : 1));
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    const speed = 30;
    const that = this;
    let delta = speed * 2 - Math.random() * speed;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
    that.tick();
    }, delta);
  };
  
}
window.onload = function() {
  const element = document.querySelector<HTMLSpanElement>('#typewrite');
  const texts = element?.getAttribute('data-type');
  const period = element?.getAttribute('data-period');
  const target = document.querySelector<HTMLSpanElement>('#typewrite-target');

  
  if (texts && element && period && target) {
    let t = new TypeAnimator(target, JSON.parse(texts), parseInt(period, 10) || 2000);
  }
  
};