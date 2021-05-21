import { Component, EventEmitter, OnInit, Input, Output, Directive } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { Field } from '../../../core';

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.sass']
})
export class ModifyFormComponent implements OnInit {
  @Input() fields: Array<Field> = [];
  @Output() fieldsModify = new EventEmitter<Field[]>();

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const values = {};
    this.formGroup = this.formBuilder.group({});
    this.fields.forEach(field => {
      this.formGroup.addControl(field.control, new FormControl(field.required ? Validators.required : null));
      values[field.control] = field.type === 'date' && field.value != null ? new Date(field.value) : field.value;
    });
    this.formGroup.setValue(values);
  }

}
