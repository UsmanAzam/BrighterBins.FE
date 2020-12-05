import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinDetailsComponent } from './bin-details/bin-details.component';
import { BinListComponent } from './bin-list/bin-list.component';

const routes: Routes = [
  { path: '', component: BinListComponent },
  { path: ':id', component: BinDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinsRoutingModule {}
