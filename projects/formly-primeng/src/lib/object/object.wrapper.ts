import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps, FormlyModule } from '@ngx-formly/core';

export interface FormlyObjectProps extends CoreFormlyFieldProps {
  hideLabel?: boolean;
  helpText?: boolean;
  hideHelpText?: boolean;
}

@Component({
  selector: 'formly-wrapper-primeng-object',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  template: `
    <div class="grid">
    @if (props.label && !props.hideLabel) {
      <div class="col-12">
        <legend>
          <strong>{{ props.label }}</strong>
          &nbsp;
        @if (props.description) {
          <small>({{ props.description }})</small>
        }
        </legend>
      </div>
    }
    @for (subField of fields(); track subField) {
      <formly-field
        [field]="subField"
        class="col-12 md:col-{{ 12 / groupLength() }}"
      ></formly-field>
    }
    @if (showError) {
      <small class="mr-auto" [ngStyle]="{ color: '#f44336' }">
        <formly-validation-message [field]="field"> </formly-validation-message>
      </small>
    }
    </div>
  `,
})
export class FormlyFieldObjectWrapper extends FieldWrapper<FormlyFieldConfig<FormlyObjectProps>> {
  groupLength() {
    return this.field.fieldGroup?.length || 1;
  }

  fields() {
    return this.field.fieldGroup || [];
  }
}