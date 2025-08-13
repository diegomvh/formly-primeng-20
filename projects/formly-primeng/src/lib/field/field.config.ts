import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldWrapper } from './field.wrapper';

export function withFormlyFormField(): ConfigOption {
  return {
    wrappers: [
      {
        name: 'field',
        component: FormlyFieldWrapper,
      },
    ],
  };
}
