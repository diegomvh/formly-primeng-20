import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from './form-field';
import { FormlyInputModule } from './input';
import { FormlyTextAreaModule } from './textarea';
import { FormlyRadioModule } from './radio';
import { FormlyCheckboxModule } from './checkbox';
import { FormlySelectModule } from './select';
import { FormlyDatepickerModule } from './datepicker';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
    FormlyDatepickerModule
  ],
})
export class FormlyPrimeNGModule {}