import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { ThemeService, Theme } from '../../../core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  faCog = faCog;
  public isShow = false;
  public theme: Theme;
  public color: Theme;
  public cTheme = 'dark';
  public cColor = 'blue';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    const gTheme = this.themeService.getActiveTheme();
    this.theme = gTheme[0];
    this.color = gTheme[1];
    this.cColor = this.color.name;
    this.cTheme = this.theme.name;
  }

  public onChangeTheme(value: string) {
    this.themeService.setTheme(value, this.cColor);
    this.cTheme = value;
  }

  public onChangeColor(value: string) {
    this.themeService.setTheme(this.cTheme, value);
    this.cColor = value;
  }

  public toggleSettings() {
    if (this.isShow) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }

}
