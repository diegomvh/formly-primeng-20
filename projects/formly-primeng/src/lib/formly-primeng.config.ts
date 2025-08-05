import { withFormlyFormField } from './form-field';
import { withFormlyFieldInput } from './input';
import { withFormlyFieldTextArea } from './textarea';
import { withFormlyFieldRadio } from './radio';
import { withFormlyFieldCheckbox } from './checkbox';
import { withFormlyFieldSelect } from './select';
import { withFormlyFieldDatepicker } from './datepicker';

export function withFormlyPrimeNG() {
  return [
    withFormlyFormField(),
    withFormlyFieldInput(),
    withFormlyFieldTextArea(),
    withFormlyFieldRadio(),
    withFormlyFieldCheckbox(),
    withFormlyFieldSelect(),
    withFormlyFieldDatepicker()
  ];
}