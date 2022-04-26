import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent {
  constructor() {}
  title = 'chartjs-project';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;

    this.ctx = this.canvas.getContext('2d');

    const data1 = [15, 20, 40, 52, 55, 35, 21, 12, 25, 56, 65, 70];
    const data2 = [18, 15, 22, 40, 60, 50, 19, 22, 30, 58, 47, 60];

    new Chart(this.ctx, {
      type: 'line',
      options: {
        plugins: { title: { display: true, text: 'Parking usage' } },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      data: {
        datasets: [
          {
            tension: 0.5,
            label: 'Cars In',
            data: data1,
            backgroundColor: '#4f3d7a',

            borderColor: '#4f3d7a',
          },
          {
            label: 'Cars out',
            data: data2,
            backgroundColor: '#009ee9',
            tension: 0.5,

            borderColor: '#009ee9',
          },
        ],
        labels: [
          'January 2021',
          'February 2021',
          'March 2021',
          'April 2021',
          'May 2021',
          'June 2021',
          'July 2021',
          'August 2021',
          'September 2021',
          'October 2021',
          'November 2021',
          'December 2021',
        ],
      },
    });
  }
}
