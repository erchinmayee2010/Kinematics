import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_ROUTING } from './app.routing';
import { ChartModule  } from 'angular-highcharts';
import {HomeService} from './route/home/home.service';

import { HomeComponent } from './route/home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule, 
        FormsModule,
        HttpModule,
        APP_ROUTING,
        ChartModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [HomeService]
})
export class AppModule {}