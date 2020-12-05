import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinsRoutingModule } from './bins-routing.module';
import { BinListComponent } from './bin-list/bin-list.component';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BinListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BinsRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
})
export class BinsModule {}
