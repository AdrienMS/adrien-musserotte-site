import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  AboutPageComponent,
  AdminPageComponent,
  CareerPageComponent,
  LoginComponent,
  ProjectsPageComponent,
  SkillsPageComponent
} from './pages';
import { MenuComponent, ModifyFormComponent } from './components';
import { MenuLinkPipe } from './pipes';

import { SharedModule } from '../shared';

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
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    FontAwesomeModule,
    SharedModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark',
      colors: [blueColor, greenColor, orangeColor, pinkColor, purpleColor, redColor],
      activeColor: 'blue'
    })
  ],
  providers: [],
  declarations: [
    AboutPageComponent,
    AdminPageComponent,
    CareerPageComponent,
    LoginComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    MenuComponent,
    ModifyFormComponent,
    MenuLinkPipe
  ]
})
export class AdminModule { }
