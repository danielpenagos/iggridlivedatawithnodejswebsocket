// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';


// import { AppComponent } from './app.component';
// import { AppService } from './app.service';


// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [AppService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// Angular Library Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Ignite UI for Angular Imports
import {
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxGridModule,
    IgxIconModule,
    IgxSliderModule,
    IgxDialogModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxProgressBarModule,
    IgxSwitchModule
} from 'igniteui-angular/main';


// Application Imports
import { AppComponent } from './app.component';
import {AppService} from './app.service';
//import {BankEntity} from './bankentity';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        IgxNavigationDrawerModule,
        IgxNavbarModule,
        IgxLayoutModule,
        IgxRippleModule,
        IgxIconModule,
        IgxButtonModule,
        IgxSliderModule,
        IgxProgressBarModule,
        IgxSwitchModule,
        IgxBadgeModule,
        IgxDialogModule,
        IgxGridModule.forRoot(),
        HttpClientModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule { }
