import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// install = @swimlane/ngx-charts

// import in module.ts =

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxChartsModule } from '@swimlane/ngx-charts';

// referance https://dzone.com/articles/building-data-visualizations-with-angular-and-ngx
export class AppComponent {
  name = 'Angular';
  view: any[];
  width: number = 400;
  height: number = 250;
  fitContainer: boolean = false;

  view: any[] = [600, 400];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;

  showYAxisLabel = true;

  timeline = true;
  doughnut = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };
  //pie
  showLabels = true;
  // data goes here
  public single = [
    {
      name: 'China',
      value: 50,
    },
    {
      name: 'USA',
      value: 20,
    },
    {
      name: 'Norway',
      value: 0,
    },
    {
      name: 'Japan',
      value: 30,
    },
    {
      name: 'Germany',
      value: 22,
    },
    {
      name: 'France',
      value: 40,
    },
  ];
  public multi = [
    {
      name: 'China',
      series: [
        {
          name: '2018',
          value: 2243772,
        },
        {
          name: '2017',
          value: 1227770,
        },
      ],
    },
    {
      name: 'USA',
      series: [
        {
          name: '2018',
          value: 1126000,
        },
        {
          name: '2017',
          value: 764666,
        },
      ],
    },
    {
      name: 'Norway',
      series: [
        {
          name: '2018',
          value: 296215,
        },
        {
          name: '2017',
          value: 209122,
        },
      ],
    },
    {
      name: 'Japan',
      series: [
        {
          name: '2018',
          value: 257363,
        },
        {
          name: '2017',
          value: 205350,
        },
      ],
    },
    {
      name: 'Germany',
      series: [
        {
          name: '2018',
          value: 196750,
        },
        {
          name: '2017',
          value: 129246,
        },
      ],
    },
    {
      name: 'France',
      series: [
        {
          name: '2018',
          value: 204617,
        },
        {
          name: '2017',
          value: 149797,
        },
      ],
    },
  ];
}
