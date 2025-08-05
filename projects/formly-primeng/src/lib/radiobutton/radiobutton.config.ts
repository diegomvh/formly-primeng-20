import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldRadioButton } from './radiobutton.type';

export function withFormlyFieldRadioButton(): ConfigOption {
  return {
    types: [
      {
        name: 'radioButton',
        component: FormlyFieldRadioButton,
        wrappers: ['form-field'],
      },
    ],
  };
}
