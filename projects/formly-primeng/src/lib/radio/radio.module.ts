import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormlyFormFieldModule } from '../form-field';
import { withFormlyFieldRadio } from './radio.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,

    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild(withFormlyFieldRadio()),
  ],
})
export class FormlyRadioModule {}
