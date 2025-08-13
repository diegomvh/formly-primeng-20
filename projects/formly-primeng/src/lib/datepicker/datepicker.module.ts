import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FormlyFormFieldModule } from '../field';
import { withFormlyFieldDatepicker } from './datepicker.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatePickerModule,

    FormlyFormFieldModule,
    FormlyModule.forChild(withFormlyFieldDatepicker()),
  ],
})
export class FormlyDatepickerModule {}
