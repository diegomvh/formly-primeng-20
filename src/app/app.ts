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
      key: 'autocomplete',
      type: 'autocomplete',
      className: 'col-12',
      templateOptions: {
        label: 'AutoComplete',
        placeholder: 'Autocomplete placeholder',
      },
    },
    {
      key: 'cascadeselect',
      type: 'cascadeselect',
      className: 'col-12',
      templateOptions: {
        label: 'CascadeSelect',
        placeholder: 'CascadeSelect placeholder',
      },
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      className: 'col-12',
      templateOptions: {
        label: 'Checkbox',
        binary: true,
      },
    },
    {
      key: 'colorpicker',
      type: 'colorpicker',
      className: 'col-12',
      templateOptions: {
        label: 'ColorPicker',
        placeholder: 'ColorPicker placeholder',
      },
    },
    {
      key: 'datepicker',
      type: 'datepicker',
      className: 'col-12',
      templateOptions: {
        label: 'DatePicker',
        placeholder: 'DatePicker placeholder',
      },
    },
    {
      key: 'editor',
      type: 'editor',
      className: 'col-12',
      templateOptions: {
        label: 'Editor',
        placeholder: 'Editor placeholder',
      },
    },
    {
      key: 'inputmask',
      type: 'inputmask',
      className: 'col-12',
      templateOptions: {
        label: 'InputMask',
        placeholder: 'InputMask placeholder',
      },
    },
    {
      key: 'inputnumber',
      type: 'inputnumber',
      className: 'col-12',
      templateOptions: {
        label: 'InputNumber',
        placeholder: 'InputNumber placeholder'
      },
    },
    {
      key: 'inputotp',
      type: 'inputotp',
      className: 'col-12',
      templateOptions: {
        label: 'InputOtp',
        placeholder: 'InputOtp placeholder'
      },
    },
    {
      key: 'input',
      type: 'input',
      className: 'col-12',
      templateOptions: {
        label: 'Input',
        placeholder: 'Input placeholder'
      },
    },
    {
      key: 'inputtext',
      type: 'inputtext',
      className: 'col-12',
      templateOptions: {
        label: 'InputText',
        placeholder: 'InputText placeholder',
      },
    },
    {
      key: 'knob',
      type: 'knob',
      className: 'col-12',
      templateOptions: {
        label: 'Knob',
        placeholder: 'Knob placeholder',
      },
    },
    {
      key: 'listbox',
      type: 'listbox',
      className: 'col-12',
      templateOptions: {
        label: 'Listbox',
        placeholder: 'Listbox placeholder',
      },
    },
    {
      key: 'multiselect',
      type: 'multiselect',
      className: 'col-12',
      templateOptions: {
        label: 'MultiSelect',
        placeholder: 'MultiSelect placeholder',
      },
    },
    {
      key: 'password',
      type: 'password',
      className: 'col-12',
      templateOptions: {
        label: 'Password',
        placeholder: 'Password placeholder',
      },
    },
    {
      key: 'radiobutton',
      type: 'radiobutton',
      className: 'col-12',
      templateOptions: {
        label: 'Radio',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      },
    },
    {
      key: 'rating',
      type: 'rating',
      className: 'col-12',
      templateOptions: {
        label: 'Rating',
        placeholder: 'Rating placeholder',
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
      key: 'selectbutton',
      type: 'selectbutton',
      className: 'col-2',
      templateOptions: {
        label: 'SelectButton',
        placeholder: 'SelectButton placeholder',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ],
      },
    },
    {
      key: 'slider',
      type: 'slider',
      className: 'col-12',
      templateOptions: {
        label: 'Slider',
        placeholder: 'Slider placeholder'
      },
    },
    {
      key: 'textarea',
      type: 'textarea',
      className: 'col-12',
      templateOptions: {
        label: 'TextArea',
        placeholder: 'Textarea placeholder',
      },
    },
    {
      key: 'togglebutton',
      type: 'togglebutton',
      className: 'col-12',
      templateOptions: {
        label: 'ToggleButton',
        placeholder: 'ToggleButton placeholder',
      },
    },
    {
      key: 'toggleswitch',
      type: 'toggleswitch',
      className: 'col-12',
      templateOptions: {
        label: 'ToggleSwitch',
        placeholder: 'ToggleSwitch placeholder',
      },
    },
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
