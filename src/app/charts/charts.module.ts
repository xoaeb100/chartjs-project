import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { PieComponent } from './pie/pie.component';
import { TimesComponent } from './times/times.component';

@NgModule({
  declarations: [LineComponent, BarComponent, DoughnutComponent, PieComponent, TimesComponent],
  imports: [CommonModule],
  exports: [LineComponent, BarComponent, DoughnutComponent, PieComponent, TimesComponent],
})
export class ChartsModule {}
