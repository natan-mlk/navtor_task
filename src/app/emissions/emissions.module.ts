import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmissionsComponent } from './components/emissions/emissions.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartEmissionsComponent } from './components/chart-emissions/chart-emissions.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmissionsComponent,
    ChartEmissionsComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EmissionsModule { }
