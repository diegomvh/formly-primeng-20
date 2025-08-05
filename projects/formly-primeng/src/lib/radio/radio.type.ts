import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../form-field';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormlySelectModule } from '@ngx-formly/core/select';

type RadioProps = FormlyFieldProps;

export interface FormlyRadioFieldConfig extends FormlyFieldConfig<RadioProps> {
  type: 'radio' | Type<FormlyFieldRadio>;
}

@Component({
  selector: 'formly-field-primeng-radio',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, RadioButtonModule],
  template: `
    <div
      class="p-field-radiobutton"
      *ngFor="let option of props.options | formlySelectOptions: field | async; let index = index"
    >
      <p-radioButton
        [name]="field.name || id"
        [formControl]="option.disabled ? disabledControl : formControl"
        [value]="option.value"
        [inputId]="id + index"
      >
      </p-radioButton>
      <label [for]="id + index" class="ml-2">{{ option.label }}</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRadio extends FieldType<FieldTypeConfig<RadioProps>> {
  get disabledControl() {
    return new UntypedFormControl({ value: this.formControl.value, disabled: true });
  }
}
