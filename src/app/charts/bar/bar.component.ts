import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent  {
  constructor() {}
  title = 'chartjs-project';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  totalstud = 0
  totalprof=0

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;

    this.ctx = this.canvas.getContext('2d');

    const data1 = [80, 76, 70, 77,72,65];
    const data2 = [7, 7, 8, 12,12,15];

    this.totalstud=  data1.reduce((a: number, b:number) => a + b)
    this.totalprof=  data2.reduce((a: number, b:number) => a + b)


    const doooo = new Chart(this.ctx, {
      type: 'bar',

      options: {
        plugins: { title: { display: true, text: `Distribution of students and teacher on bases of STD ` }

       },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      data: {
        datasets: [
          {
            label: 'Students',
            data: data1,
            backgroundColor: 'rgb(255, 205, 86)',

            // borderColor: '#000',
            // borderWidth: 1.5,
            barPercentage: 1.0,
            // categoryPercentage: 1.0,
          },
          {
            label: 'Teachers',
            data: data2,
            backgroundColor: 'rgb(3, 255, 0)',
            // borderColor: '#000',
            // borderWidth: 1.5,
            barPercentage: 1.0,
            // categoryPercentage: 1.0,
          },
        ],
        labels: ['V', 'VI', 'VII', 'VIII','IX','X'],
      },
    });
  }
}
