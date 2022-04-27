import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent {
  constructor() {}

  title = 'chartjs-project';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;

    this.ctx = this.canvas.getContext('2d');

    const data1 = [8, 4, 15, 20];

    const doooo = new Chart(this.ctx, {
      type: 'pie',

      options: {
        plugins: { title: { display: true, text: 'Guest entry count' } },
      },
      data: {
        datasets: [
          {
            label: 'Current Vallue',
            data: data1,
            backgroundColor: [
              'rgb(3, 255, 0)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(255, 99, 132)',
            ],
            borderColor: '#000',
            borderWidth: 1.5,
            hoverOffset: 8,
          },
        ],
        labels: ['Vendors', 'Service', 'Delivery', 'Guests'],
      },
    });
  }
}
