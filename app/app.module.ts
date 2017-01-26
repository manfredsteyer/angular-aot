import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutesModule} from "./app.routes";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home/home.component";
import {FlugModule} from "./flug/flug.module";
import { CityPipe} from './pipes/city.pipe';
import { ROUTE_CONFIG } from './app.routes';
import {RouterModule} from "@angular/router";
//import { MaterialModule } from '@angular/material';

export function aotTest() {
    return "Manfred was here!";
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        FlugModule,
        //MaterialModule.forRoot(),
        RouterModule.forRoot(ROUTE_CONFIG)
    ],
    declarations: [
        AppComponent,
        HomeComponent
        
    ],
    bootstrap: [
        AppComponent 
    ]
})
export class AppModule { 
}