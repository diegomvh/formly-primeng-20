import { withFormlyFormField } from './field';
import { withFormlyFieldInputText } from './inputtext';
import { withFormlyFieldInputNumber } from './inputnumber';
import { withFormlyFieldTextArea } from './textarea';
import { withFormlyFieldRadio } from './radiobutton';
import { withFormlyFieldCheckbox } from './checkbox';
import { withFormlyFieldSelect } from './select';
import { withFormlyFieldDatePicker } from './datepicker';
import { withFormlyFieldAutoComplete } from './autocomplete';
import { withFormlyFieldToggleSwitch } from './toggleswitch';
import { withFormlyFieldInputOtp } from './inputotp';
import { withFormlyFieldPassword } from './password';
import { withFormlyFieldColorPicker } from './colorpicker';
import { withFormlyFieldEditor } from './editor';
import { withFormlyFieldSlider } from './slider';
import { withFormlyFieldRating } from './rating';
import { withFormlyFieldKnob } from './knob';
import { withFormlyFieldInputMask } from './inputmask';

export function withFormlyPrimeNG() {
  return [
    withFormlyFormField(),
    withFormlyFieldInputText(),
    withFormlyFieldInputNumber(),
    withFormlyFieldInputOtp(),
    withFormlyFieldAutoComplete(),
    withFormlyFieldTextArea(),
    withFormlyFieldPassword(),
    withFormlyFieldRadio(),
    withFormlyFieldCheckbox(),
    withFormlyFieldSelect(),
    withFormlyFieldDatePicker(),
    withFormlyFieldToggleSwitch(),
    withFormlyFieldColorPicker(),
    withFormlyFieldEditor(),
    withFormlyFieldSlider(),
    withFormlyFieldRating(),
    withFormlyFieldKnob(),
    withFormlyFieldInputMask(),
  ];
}