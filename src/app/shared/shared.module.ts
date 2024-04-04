import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {SelectComponent} from './select/select.component';
import {RadioGroupComponent} from './radio-group/radio-group.component';
import {DatePickerComponent} from './date-picker/date-picker.component';

@NgModule({
    declarations: [
        InputComponent,
        SelectComponent,
        RadioGroupComponent,
        DatePickerComponent
    ],
    exports: [
        InputComponent,
        SelectComponent,
        RadioGroupComponent,
        DatePickerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
