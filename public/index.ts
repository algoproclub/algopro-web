import './styles.css';

// No theme switching needed - dark mode is now default

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