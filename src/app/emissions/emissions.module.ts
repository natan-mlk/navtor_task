import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmissionsComponent } from './components/emissions/emissions.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartEmissionsComponent } from './components/chart-emissions/chart-emissions.component';



@NgModule({
  declarations: [
    EmissionsComponent,
    ChartEmissionsComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ]
})
export class EmissionsModule { }
