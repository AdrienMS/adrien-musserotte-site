import { Component, OnInit, HostListener } from '@angular/core';
import { angularMath } from 'angular-ts-math';

import { faDna, faRocket } from '@fortawesome/free-solid-svg-icons';

declare var particlesJS: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  faDna = faDna;
  faRocket = faRocket;

  public startParallax = 0;

  public toResize = '100%';

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', '../../../../assets/config/particle.json', null);
    particlesJS.load('particles-js-bubble', '../../../../assets/config/particlesjs-bubble.json', null);
  }

  private checkHeight() {
    const home = document.getElementById('home').getBoundingClientRect().height;
    const projects = document.querySelector('.projects').getBoundingClientRect().height;
    const contact = document.getElementById('contact').getBoundingClientRect().height;

    this.startParallax = home - projects - contact - window.innerHeight - 100;
    this.resizeParticle();
  }

  private resizeParticle() {
    let resize = 0;
    if (document.documentElement.scrollTop >= this.startParallax) {
      const diff = (document.documentElement.scrollTop - this.startParallax) > 0 ?
        document.documentElement.scrollTop - this.startParallax : window.innerHeight;
      resize = (window.innerHeight - diff) > 0 ? window.innerHeight - diff : 0;
    } else {
      resize = window.innerHeight;
    }
    this.toResize = `${resize}px`;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkHeight();
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    this.checkHeight();
  }

}
