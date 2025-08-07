import { withFormlyFormField } from './form-field';
import { withFormlyFieldInputText } from './inputtext';
import { withFormlyFieldInputNumber } from './inputnumber';
import { withFormlyFieldTextArea } from './textarea';
import { withFormlyFieldRadio } from './radiobutton';
import { withFormlyFieldCheckbox } from './checkbox';
import { withFormlyFieldSelect } from './select';
import { withFormlyFieldDatepicker } from './datepicker';
import { withFormlyFieldAutoComplete } from './autocomplete';
import { withFormlyFieldToggleSwitch } from './toggleswitch';

export function withFormlyPrimeNG() {
  return [
    withFormlyFormField(),
    withFormlyFieldInputText(),
    withFormlyFieldInputNumber(),
    withFormlyFieldAutoComplete(),
    withFormlyFieldTextArea(),
    withFormlyFieldRadio(),
    withFormlyFieldCheckbox(),
    withFormlyFieldSelect(),
    withFormlyFieldDatepicker(),
    withFormlyFieldToggleSwitch()
  ];
}