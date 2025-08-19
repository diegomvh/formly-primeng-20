import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface InputTextProps extends FormlyFieldProps {}

export interface FormlyInputTextFieldConfig extends FormlyFieldConfig<InputTextProps> {
  type: 'inputtext' | Type<FormlyFieldInputText>;
}

@Component({
  selector: 'formly-field-primeng-inputtext',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputTextModule],
  template: `
    <input
      [id]="id"
      pInputText
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputText extends FieldType<FieldTypeConfig<InputTextProps>> {}
