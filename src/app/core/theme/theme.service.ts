import { Injectable, Inject, EventEmitter } from '@angular/core';
import { THEMES, ACTIVE_THEME, COLORS, ACTIVE_COLOR, Theme } from './themes/symbols';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<Theme[]>();

  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public theme: string,
    @Inject(COLORS) public colors: Theme[],
    @Inject(ACTIVE_COLOR) public color: string
  ) {
  }

  getActiveTheme() {
    const theme = this.themes.find(t => t.name === this.theme);
    if (!theme) {
      throw new Error(`Theme not found: '${this.theme}'`);
    }
    const color = this.colors.find(t => t.name === this.color);
    if (!color) {
      throw new Error(`Color not found: '${this.color}'`);
    }
    return [theme, color];
  }

  setTheme(name: string, color: string) {
    this.theme = name;
    this.color = color;
    this.themeChange.emit(this.getActiveTheme());
  }

}
