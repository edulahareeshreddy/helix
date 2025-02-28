import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() required: boolean = false;
}
