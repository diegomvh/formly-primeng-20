import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps, FormlyModule } from '@ngx-formly/core';

export interface FormlyFieldProps extends CoreFormlyFieldProps {
  hideRequiredMarker?: boolean;
  hideLabel?: boolean;
  helpText?: boolean;
  hideHelpText?: boolean;
}

@Component({
  selector: 'formly-wrapper-primeng-field',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  template: `
    <div class="flex flex-col">
      @if (props.label && !props.hideLabel) {
      <label [for]="id">
        {{ props.label }}
        @if (props.required && !props.hideRequiredMarker) {
          <span aria-hidden="true">*</span>
        }
      </label>
      }
      <ng-container #fieldComponent></ng-container>
      @if (props.helpText && !props.hideHelpText) {
        <small>{{props.helpText}}</small>
      }

      @if (showError) {
        <small>
          <formly-validation-message [field]="field"></formly-validation-message>
        </small>
      }
    </div>
  `,
})
export class FormlyFieldWrapper extends FieldWrapper<FormlyFieldConfig<FormlyFieldProps>> {}
