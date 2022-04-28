import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { PieComponent } from './pie/pie.component';
import { TimesComponent } from './times/times.component';
import { PolarComponent } from './polar/polar.component';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [LineComponent, BarComponent, DoughnutComponent, PieComponent, TimesComponent, PolarComponent, CardsComponent, TableComponent],
  imports: [CommonModule],
  exports: [LineComponent, BarComponent, DoughnutComponent, PieComponent, TimesComponent,PolarComponent,CardsComponent],
})
export class ChartsModule {}
