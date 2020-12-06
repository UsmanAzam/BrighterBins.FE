import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { RouterModule } from '@angular/router';
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
} from '@nebular/theme';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [
    PaginatorComponent,
    GuestLayoutComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbSelectModule,
    NbIconModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbButtonModule,
  ],
  exports: [PaginatorComponent],
})
export class SharedModule {}
