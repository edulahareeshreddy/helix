import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent {
    @Input() name: string = '';
    @Input() label: string = '';
    @Input() required: boolean = false;
    @Input() options: any[] = [];
}
