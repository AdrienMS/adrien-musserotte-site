import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent, FooterComponent, SettingsComponent } from './layout';
import { ActualDatePipe, SingleImagePipe } from './pipes';
import {
  BaseComponent,
  InputComponent,
  ButtonComponent,
  DateComponent,
  ArrayComponent,
  SelectComponent,
  ImageSelectionComponent,
  DynamicFormComponent
} from './components';
import { DynamicFieldDirective } from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    FontAwesomeModule,
  ],
  declarations: [
      HeaderComponent,
      FooterComponent,
      SettingsComponent,
      ActualDatePipe,
      SingleImagePipe,
      InputComponent,
      ButtonComponent,
      BaseComponent,
      DateComponent,
      DynamicFieldDirective,
      DynamicFormComponent,
      SelectComponent,
      ArrayComponent,
      ImageSelectionComponent
    ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    ActualDatePipe,
    SingleImagePipe,
    InputComponent,
    ButtonComponent,
    BaseComponent,
    DateComponent,
    ArrayComponent,
    SelectComponent,
    ImageSelectionComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  entryComponents: [
    InputComponent,
    ArrayComponent,
    ButtonComponent,
    DateComponent,
    SelectComponent,
    ImageSelectionComponent
  ]
})
export class SharedModule {
}
