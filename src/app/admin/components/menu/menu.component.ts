import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../../core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  faAngleRight = faAngleRight;
  public menu: Array<string> = ['accueil', 'parcours', 'à propos', 'compétences', 'projets'];
  public isToTop = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public logout() {
    this.authService.signOutUser();
    this.router.navigate(['/admin/login']);
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (document.documentElement.scrollTop > 0) { this.isToTop = true; }
    else { this.isToTop = false; }
  }

}
