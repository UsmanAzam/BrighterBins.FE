import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinsRoutingModule } from './bins-routing.module';
import { BinListComponent } from './bin-list/bin-list.component';
import { NbButtonModule, NbCardModule, NbPopoverModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { BinDetailsComponent } from './bin-details/bin-details.component';
import { BinLocationComponent } from './components/bin-location/bin-location.component';
import { BinMessagesChartComponent } from './components/bin-messages-chart/bin-messages-chart.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BinListComponent,
    BinDetailsComponent,
    BinLocationComponent,
    BinMessagesChartComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BinsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbPopoverModule,
    GoogleMapsModule,
    ChartsModule,
    SharedModule,
  ],
})
export class BinsModule {}
