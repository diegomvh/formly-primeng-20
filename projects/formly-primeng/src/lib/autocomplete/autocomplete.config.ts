import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldAutoComplete } from './autocomplete.type';

export function withFormlyFieldAutoComplete(): ConfigOption {
  return {
    types: [
      {
        name: 'autoComplete',
        component: FormlyFieldAutoComplete,
        wrappers: ['field'],
      },
    ],
  };
}
