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
      key: 'checkbox',
      type: 'checkbox',
      className: 'col-2',
      templateOptions: {
        label: 'Checkbox',
        binary: true,
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
      type: 'radioButton',
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
        label: '',
        placeholder: 'Textarea placeholder',
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
