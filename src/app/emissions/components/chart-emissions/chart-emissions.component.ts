import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-chart-emissions',
  templateUrl: './chart-emissions.component.html',
  styleUrls: ['./chart-emissions.component.scss']
})
export class ChartEmissionsComponent {

  Highcharts: any = Highcharts; 


    data = [
      {
        ch4_emissions: 1.51,
        co2_emissions: 94.05,
        nox_emissions: 2.8,
        pm_emissions: 0.37097,
        report_from_utc: '2023-01-01T00:00:00Z',
        report_to_utc: '2023-01-02T00:00:00',
        sox_emissions: 1.62,
      },
      {
        ch4_emissions: 1.203,
        co2_emissions: 74.92,
        nox_emissions: 2.23,
        pm_emissions: 0.29618,
        report_from_utc: '2023-01-22T05:00:00Z',
        report_to_utc: '2023-01-23T06:00:00',
        sox_emissions: 1.3,
      },
      {
        ch4_emissions: 0.0535,
        co2_emissions: 3.43,
        nox_emissions: 0.07,
        pm_emissions: 0.00474,
        report_from_utc: '2023-02-01T06:00:00Z',
        report_to_utc: '2023-02-01T12:12:00',
        sox_emissions: 0.01,
      },
    ];
  

    chartOptions: any = {
      chart: {
        type: 'line', 
      },
      title: {
        text: 'Emissions',
      },
      xAxis: {
        categories: this.data.map(date => {
            return Highcharts.dateFormat('%Y-%m-%d', new Date(date.report_from_utc).getTime());
        })
      },
      yAxis: {
        title: {
          text: 'Values',
        },
      },
      series: [
        {
          name: 'CH4 Emissions',
          data: this.data.map((item) => item.ch4_emissions),
        },
        {
          name: 'CO2 Emissions',
          data: this.data.map((item) => item.co2_emissions),
        },
        {
          name: 'NOx Emissions',
          data: this.data.map((item) => item.nox_emissions),
        },
        {
          name: 'PM Emissions',
          data: this.data.map((item) => item.pm_emissions),
        },
        {
          name: 'SOx Emissions',
          data: this.data.map((item) => item.sox_emissions),
        },
      ],
    };
}
