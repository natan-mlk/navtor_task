import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VesselsModule } from './vessels/vessels.module';
import { EmissionsModule } from './emissions/emissions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    VesselsModule,
    EmissionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
