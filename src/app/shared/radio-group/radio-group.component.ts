import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-radio-group',
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent {
    @Input() name: string = '';
    @Input() label: string = '';
    @Input() required: boolean = false;
    @Input() options: any[] = [];

}
