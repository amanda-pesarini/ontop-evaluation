import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {

    @Input() label: string = '';
    @Input() fxFlex: string = '';
    @Input() name: string = '';
    @Input() options: {value: string}[] = [{value: ''}];
}
