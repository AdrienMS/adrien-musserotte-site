import { InjectionToken } from '@angular/core';

export const THEMES = new InjectionToken('THEMES');
export const ACTIVE_THEME = new InjectionToken('ACTIVE_THEME');
export const COLORS = new InjectionToken('COLORS');
export const ACTIVE_COLOR = new InjectionToken('ACTIVE_COLOR');

export interface Theme {
  name: string;
  properties: any;
}

export interface ThemeOptions {
  themes: Theme[];
  active: string;
  colors: Theme[];
  activeColor: string;
}
