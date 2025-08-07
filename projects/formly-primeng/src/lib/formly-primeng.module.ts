import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from './form-field';
import { FormlyInputTextModule } from './inputtext';
import { FormlyInputNumberModule } from './inputnumber';
import { FormlyAutoCompleteModule } from './autocomplete';
import { FormlyTextAreaModule } from './textarea';
import { FormlyRadioModule } from './radiobutton';
import { FormlyCheckboxModule } from './checkbox';
import { FormlySelectModule } from './select';
import { FormlyDatepickerModule } from './datepicker';
import { FormlyToggleSwitchModule } from './toggleswitch';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputTextModule,
    FormlyInputNumberModule,
    FormlyAutoCompleteModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
    FormlyDatepickerModule,
    FormlyToggleSwitchModule
  ],
})
export class FormlyPrimeNGModule {}