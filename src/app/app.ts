import { JsonPipe } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ButtonModule } from 'primeng/button';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormlyModule, ButtonModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  autoComplete$ = new EventEmitter<any>();
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'input',
      type: 'input',
      className: 'col-4',
      templateOptions: {
        label: 'Input',
        placeholder: 'Input placeholder',
        required: true,
      },
    },
    {
      key: 'inputtext',
      type: 'inputtext',
      className: 'col-4',
      templateOptions: {
        label: 'InputText',
        placeholder: 'Input placeholder',
        required: true,
      },
    },
    {
      key: 'inputotp',
      type: 'inputotp',
      className: 'col-4',
      templateOptions: {
        label: 'InputOtp',
        placeholder: 'InputOtp placeholder',
        required: true,
      },
    },
    {
      key: 'inputnumber',
      type: 'inputnumber',
      className: 'col-4',
      templateOptions: {
        label: 'InputNumber',
        placeholder: 'InputNumber placeholder',
        required: true,
      },
    },
    {
      key: 'inputmask',
      type: 'inputmask',
      className: 'col-4',
      templateOptions: {
        label: 'InputMask',
        placeholder: 'InputMask placeholder',
        required: true,
      },
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      className: 'col-2',
      templateOptions: {
        label: 'Checkbox',
        binary: true,
      },
    },
    {
      key: 'datepicker',
      type: 'datepicker',
      className: 'col-2',
      templateOptions: {
        label: 'DatePicker',
      },
    },
    {
      key: 'colorpicker',
      type: 'colorpicker',
      className: 'col-2',
      templateOptions: {
        label: 'ColorPicker',
      },
    },
    {
      key: 'select',
      type: 'select',
      className: 'col-2',
      templateOptions: {
        label: 'Select',
        placeholder: 'Select placeholder',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ],
      },
    },
    {
      key: 'radio',
      type: 'radiobutton',
      className: 'col-2',
      templateOptions: {
        label: 'Radio',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      },
    },
    {
      key: 'textarea',
      type: 'textarea',
      className: 'col-12',
      templateOptions: {
        label: 'TextArea',
        placeholder: 'Textarea placeholder',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'password',
      className: 'col-12',
      templateOptions: {
        label: '',
        placeholder: 'Password placeholder',
        required: true,
      },
    },
    {
      key: 'slider',
      type: 'slider',
      className: 'col-12',
      templateOptions: {
        label: '',
        placeholder: 'Slider placeholder',
        required: true,
      },
    },
    {
      key: 'knob',
      type: 'knob',
      className: 'col-12',
      templateOptions: {
        label: '',
        placeholder: 'Knob placeholder',
        required: true,
      },
    },
    {
      key: 'editor',
      type: 'editor',
      className: 'col-12',
      templateOptions: {
        label: '',
        placeholder: 'Editor placeholder',
        required: true,
      },
    },
    {
      key: 'autocomplete',
      type: 'autocomplete',
      className: 'col-12',
      templateOptions: {
        label: 'AutoComplete',
        placeholder: 'Autocomplete placeholder',
        required: true,
      },
    }
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }

  setValue(): void {
    this.model = { ...this.model, treeSelect: 'Scarface Movie' };
  }
}
