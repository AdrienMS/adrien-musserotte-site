import { Directive, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ThemeService } from './theme.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Theme } from './themes/symbols';

@Directive({
  selector: '[appSettingTheme]'
})
export class ThemeDirective implements OnInit {

  private unsubscribe = new Subject();
  constructor(
    private elementRef: ElementRef,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    const active = this.themeService.getActiveTheme();
    if (active) {
      this.updateTheme(active[0], active[1]);
    }
    this.themeService.themeChange.pipe(takeUntil(this.unsubscribe))
      .subscribe(([theme, color]: Theme[]) => this.updateTheme(theme, color));
  }

  updateTheme(theme: Theme, color: Theme) {
    for (const key of Object.keys(theme.properties)) {
      this.elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
    }
    for (const key of Object.keys(color.properties)) {
      this.elementRef.nativeElement.style.setProperty(key, color.properties[key]);
    }
  }

}
