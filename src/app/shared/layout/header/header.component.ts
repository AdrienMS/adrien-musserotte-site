import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope, faCog, faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { ThemeService } from '../../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {
  /*
    font awesome icons variables
  */
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  faCog = faCog;
  faBars = faBars;

  public color = 'blue';
  public isFixed = false;

  /*
    input variables
  */
  @Input() isDark = false;

  constructor(private themeService: ThemeService, private router: Router) {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    const theme = this.themeService.getActiveTheme();
    this.color = theme[1].name;
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll(event) {
    if (!this.isFixed) {
      if (document.documentElement.scrollTop !== 0) {
        document.getElementById('menu').classList.add('fixed');
      } else {
        document.getElementById('menu').classList.remove('fixed');
      }
    }
  }

  public scrollTo(item) {
    const toScroll = document.getElementById(item);
    toScroll.scrollIntoView();
  }

  public onOpenMenu() {
    document.getElementById('nav_mobile').classList.add('show');
    document.getElementById('black_screen').classList.add('show');
  }

  public onCloseMenu() {
    document.getElementById('nav_mobile').classList.remove('show');
    document.getElementById('black_screen').classList.remove('show');
  }

}
