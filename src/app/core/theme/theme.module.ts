import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from './theme.service';
import { ThemeDirective } from './theme.directive';
import { THEMES, ACTIVE_THEME, COLORS, ACTIVE_COLOR, ThemeOptions } from './themes/symbols';

@NgModule({
  imports: [CommonModule],
  providers: [ThemeService],
  declarations: [ThemeDirective],
  exports: [ThemeDirective]
})
export class ThemeModule {
  static forRoot(options: ThemeOptions): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: THEMES,
          useValue: options.themes
        },
        {
          provide: ACTIVE_THEME,
          useValue: options.active
        },
        {
          provide: COLORS,
          useValue: options.colors
        },
        {
          provide: ACTIVE_COLOR,
          useValue: options.activeColor
        }
      ]
    };
  }
}
