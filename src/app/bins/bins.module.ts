import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinsRoutingModule } from './bins-routing.module';
import { BinListComponent } from './bin-list/bin-list.component';

@NgModule({
  declarations: [BinListComponent],
  imports: [CommonModule, BinsRoutingModule],
})
export class BinsModule {}
