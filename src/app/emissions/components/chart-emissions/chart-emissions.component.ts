import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EmissionDataModel, EmissionsCollectionModel } from '../../models/emissions.model';


@Component({
  selector: 'app-chart-emissions',
  templateUrl: './chart-emissions.component.html',
  styleUrls: ['./chart-emissions.component.scss']
})
export class ChartEmissionsComponent implements OnInit, OnChanges  {

  @Input() emissionsData: EmissionDataModel | undefined;

  Highcharts: any = Highcharts; 
  chartOptions: any = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['emissionsData'] && changes['emissionsData'].currentValue) {
      console.log('NEW DATA', changes['emissionsData'].currentValue);
      this.generateChart();
    }
  }

  private generateChart(): void {
    const data = this.emissionsData;      
    this.chartOptions = {
      chart: {
        type: 'line', 
      },
      title: {
        text: 'Emissions',
      },
      xAxis: {
        categories: data?.map(date => {
            return Highcharts.dateFormat('%Y-%m-%d', new Date(date.report_from_utc).getTime());
        }, 'report_from_utc')
      },
      yAxis: {
        title: {
          text: 'Values',
        },
      },
      series: [
        {
          type: 'line',
          name: 'CH4 Emissions',
          data: data?.map((item: any) => item.co2_emissions, 'ch4_emissions')
        },
        {
          type: 'line',
          name: 'CO2 Emissions',
          data: data?.map((item) => item.co2_emissions, 'co2_emissions')
        },
        {
          type: 'line',
          name: 'NOx Emissions',
          data: data?.map((item) => item.nox_emissions, 'nox_emissions')
        },
        {
          type: 'line',
          name: 'PM Emissions',
          data: data?.map((item) => item.pm_emissions, 'pm_emissions'),
        },
        {
          type: 'line',
          name: 'SOx Emissions',
          data: data?.map((item) => item.sox_emissions, 'sox_emissions'),
        },
      ],
    };
  }
}
