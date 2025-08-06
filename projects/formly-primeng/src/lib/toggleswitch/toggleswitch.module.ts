import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { withFormlyFieldToggleSwitch } from './toggleswitch.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToggleSwitchModule,

    FormlyFormFieldModule,
    FormlyModule.forChild(withFormlyFieldToggleSwitch()),
  ],
})
export class FormlyToggleSwitchModule {}