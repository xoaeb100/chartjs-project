import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  constructor() {}
  title = 'chartjs-project';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;

    this.ctx = this.canvas.getContext('2d');

    const data1 = [8, 4, 15, 25];
    const data2 = [7, 4, 18, 15];

    const doooo = new Chart(this.ctx, {
      type: 'bar',

      options: {
        plugins: { title: { display: true, text: 'Guest entry count' } },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      data: {
        datasets: [
          {
            label: 'Guests In',
            data: data1,
            backgroundColor: 'rgb(255, 205, 86)',

            // borderColor: '#000',
            // borderWidth: 1.5,
            barPercentage: 1.0,
            // categoryPercentage: 1.0,
          },
          {
            label: 'Guests Out',
            data: data2,
            backgroundColor: 'rgb(3, 255, 0)',
            // borderColor: '#000',
            // borderWidth: 1.5,
            barPercentage: 1.0,
            // categoryPercentage: 1.0,
          },
        ],
        labels: ['Vendors', 'Service', 'Delivery', 'Guests'],
      },
    });
  }
}
