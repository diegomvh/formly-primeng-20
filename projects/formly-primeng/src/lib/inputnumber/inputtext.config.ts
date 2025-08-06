import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldInputText } from './inputtext.type';

export function withFormlyFieldInputText(): ConfigOption {
  return {
    types: [
      {
        name: 'input',
        component: FormlyFieldInputText,
        wrappers: ['form-field'],
      },
      { name: 'inputtext', extends: 'input' },
      { name: 'string', extends: 'input' },
      {
        name: 'number',
        extends: 'input',
        defaultOptions: {
          props: {
            type: 'number',
          },
        },
      },
      {
        name: 'integer',
        extends: 'input',
        defaultOptions: {
          props: {
            type: 'number',
          },
        },
      },
    ],
  };
}
