import { Pipe, PipeTransform } from '@angular/core';

interface MenuLink {
  menu: string;
  link: string;
}

@Pipe({
  name: 'menuLink'
})
export class MenuLinkPipe implements PipeTransform {
  private menuLinks: Array<MenuLink> = [
    {menu: 'accueil', link: ''},
    {menu: 'parcours', link: 'career'},
    {menu: 'à propos', link: 'about'},
    {menu: 'compétences', link: 'skills'},
    {menu: 'projets', link: 'projects'}
  ];

  transform(value: string): string {
    const toReturn = this.menuLinks.find((el: MenuLink) => el.menu === value);
    return toReturn !== undefined ? toReturn.link : '';
  }

}
