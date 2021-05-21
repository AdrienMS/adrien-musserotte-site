import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { GoogleMapsModule } from '@angular/google-maps';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomePageComponent } from './pages';

import { SharedModule } from '../shared';

import {
  AboutComponent,
  BannerComponent,
  CareerComponent,
  ContactComponent,
  ProjectsComponent,
  SkillsComponent
} from './components';

import {
  ThemeModule,
  lightTheme,
  darkTheme,
  blueColor,
  greenColor,
  orangeColor,
  pinkColor,
  purpleColor,
  redColor
} from '../core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    HomeRoutingModule,
    SharedModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark',
      colors: [blueColor, greenColor, orangeColor, pinkColor, purpleColor, redColor],
      activeColor: 'blue'
    })
  ],
  providers: [
  ],
  declarations: [
    HomePageComponent,
    AboutComponent,
    BannerComponent,
    CareerComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent
  ]
})
export class HomeModule {}
