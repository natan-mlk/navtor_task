import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { VesselsModule } from './vessels/vessels.module';
import { EmissionsModule } from './emissions/emissions.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { VesselsEffects } from './vessels/state/vessels.effects';
import { EmissionsEffects } from './emissions/state/emissions.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    VesselsModule,
    EmissionsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([VesselsEffects, EmissionsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
