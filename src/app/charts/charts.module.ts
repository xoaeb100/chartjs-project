import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [LineComponent, BarComponent, DoughnutComponent, PieComponent],
  imports: [CommonModule],
  exports: [LineComponent, BarComponent, DoughnutComponent, PieComponent],
})
export class ChartsModule {}
