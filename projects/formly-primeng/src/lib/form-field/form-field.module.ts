import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { withFormlyFormField } from './form-field.config';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild(withFormlyFormField())],
})
export class FormlyFormFieldModule {}
