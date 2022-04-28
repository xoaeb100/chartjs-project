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

    const data1 = [80, 75, 77, 72, 74, 75, 73, 71, 79, 77];
    const data2 = [72, 78, 68, 65, 62, 67, 77, 65, 75, 68];
    const data3 = [67, 70, 66, 61, 58, 63, 69, 70, 65, 66];
    const data4 = [70, 65, 63, 67, 62, 57, 60, 60, 63, 66];
    const data5 = [67, 70, 66, 61, 58, 63, 69, 70, 65, 66];
    const data6 = [67, 70, 66, 61, 58, 63, 69, 70, 65, 66];


    new Chart(this.ctx, {
      type: 'line',
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Avg Attendance of each STD per week ',
          },
        },
        scales: {
          y: {
            min: 50,
          },
        },
      },
      data: {
        datasets: [
          {
            tension: 0.2,
            label: 'V',
            data: data1,
            backgroundColor: '#4f3d7a',

            borderColor: '#4f3d7a',
          },
          {
            label: 'VI',
            data: data2,
            backgroundColor: '#009ee9',
            tension: 0.2,

            borderColor: '#009ee9',
          },
          {
            label: 'VII',
            data: data3,
            backgroundColor: '#f76284',
            tension: 0.2,

            borderColor: '#f76284',
          },
          {
            tension: 0.2,
            label: 'VIII',
            data: data4,
            backgroundColor: '#4fa745',

            borderColor: '#4fa745',
          },
        ],
        labels: [
          'Week 1',
          'Week 2',
          'Week 3',
          'Week 4',
          'Week 5',
          'Week 6',
          'Week 7',
          'Week 8',
          'Week 9',
          'Week 10',
        ],
      },
    });
  }
}
