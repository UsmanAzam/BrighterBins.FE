import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinListComponent } from './bin-list/bin-list.component';

const routes: Routes = [{ path: '', component: BinListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinsRoutingModule {}
