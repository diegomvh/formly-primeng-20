import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from './form-field';
import { FormlyInputModule } from './input';
import { FormlyAutoCompleteModule } from './autocomplete';
import { FormlyTextAreaModule } from './textarea';
import { FormlyRadioModule } from './radiobutton';
import { FormlyCheckboxModule } from './checkbox';
import { FormlySelectModule } from './select';
import { FormlyDatepickerModule } from './datepicker';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputModule,
    FormlyAutoCompleteModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
    FormlyDatepickerModule
  ],
})
export class FormlyPrimeNGModule {}