import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from './field';
import { FormlyInputTextModule } from './inputtext';
import { FormlyInputNumberModule } from './inputnumber';
import { FormlyAutoCompleteModule } from './autocomplete';
import { FormlyTextAreaModule } from './textarea';
import { FormlyRadioModule } from './radiobutton';
import { FormlyCheckboxModule } from './checkbox';
import { FormlySelectModule } from './select';
import { FormlyDatepickerModule } from './datepicker';
import { FormlyToggleSwitchModule } from './toggleswitch';
import { FormlyInputOtpModule } from './inputotp';
import { FormlyPasswordModule } from './password';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputTextModule,
    FormlyInputNumberModule,
    FormlyInputOtpModule,
    FormlyAutoCompleteModule,
    FormlyTextAreaModule,
    FormlyPasswordModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
    FormlyDatepickerModule,
    FormlyToggleSwitchModule
  ],
})
export class FormlyPrimeNGModule {}