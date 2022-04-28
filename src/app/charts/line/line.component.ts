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

    const data1 = [80, 75, 77, 72, 74, 75, , 73, 71, 79, 77, 72, 74, , 80, 77, 72, 74];
    const data2 = [72, 78, 68, 65, 62, 67, , 77, 65, 75, 68, 65, 62, , 77, 68, 65, 62];
    const data3 = [67, 70, 66, 61, 58, 63, , 69, 70, 65, 66, 61, 58, , 64, 66, 61, 58];


    new Chart(this.ctx, {
      type: 'line',
      options: {
        plugins: { title: { display: true, text: 'Attendance of each STD per day ' } },
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
            label: 'V',
            data: data1,
            backgroundColor: '#4f3d7a',

            borderColor: '#4f3d7a',
          },
          {
            label: 'VI',
            data: data2,
            backgroundColor: '#009ee9',
            tension: 0.5,

            borderColor: '#009ee9',
          },
          {
            label: 'VII',
            data: data3,
            backgroundColor: '#f76284',
            tension: 0.5,

            borderColor: '#f76284',
          },
        ],
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','12','13','14','15','16','17','18'],
      },
    });
  }
}
