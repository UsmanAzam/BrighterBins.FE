import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbIconModule, NbSelectModule } from '@nebular/theme';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbSelectModule,
    NbIconModule,
    NbButtonModule,
  ],
  exports: [PaginatorComponent],
})
export class SharedModule {}
