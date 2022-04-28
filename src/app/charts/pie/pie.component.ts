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

    const data1 = [5,4,3,2,1.5];
    const total:any=  data1.reduce((a: any, b:any) => a + b)


    const doooo = new Chart(this.ctx, {
      type: 'polarArea',

      options: {
        plugins: { title: { display: true, text: `Expenses in Lakhs (Total= ${total} L₹)` } },
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
              '#CAD5E2'
            ],
            borderColor: '#000',
            borderWidth: 1.5,
            hoverOffset: 8,
          },
        ],
        labels: ['Faculty', 'Electricity', 'Canteen', 'Events','Funds'],
      },
    });
  }
}
