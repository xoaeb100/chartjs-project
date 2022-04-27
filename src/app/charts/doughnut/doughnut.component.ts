import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import data from '../../../backend/userpayment.json';

let dataval: any = [];

const val = data.map(function (elements: any) {
  dataval.push(elements['mode_o_paymt']);
});

console.log(dataval);
// console.log(dataval.filter((x: any) => x == 'cash').length);

const count: any = {};

for (const element of dataval) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent {
  constructor() {}

  title = 'chartjs-project';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;

    this.ctx = this.canvas.getContext('2d');

    const data1 = [count['cash'], count['online-paid'], count['not-paid']];

    const doooo = new Chart(this.ctx, {
      type: 'doughnut',
      options: {
        plugins: { title: { display: true, text: 'Mode of payment' } },
      },
      data: {
        datasets: [
          {
            label: 'Current Vallue',
            data: data1,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(3, 255, 0)',
            ],
            borderColor: '#000',
            borderWidth: 1.5,
            hoverOffset: 8,
          },
        ],
        labels: ['Cash', 'Online-Paid', 'Not-paid'],
      },
    });
  }
}
