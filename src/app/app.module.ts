import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {JoinUsComponent} from './pages/join-us/join-us.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './core/footer/footer.component';
import {CommonModule} from "@angular/common";
import {ToastrModule} from 'ngx-toastr';
import {SharedModule} from "./shared/shared.module";
import {NgxDropzoneModule} from "ngx-dropzone";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        JoinUsComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            closeButton: true,
        }),
        NgxDropzoneModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
