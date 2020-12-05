import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'bins',
    loadChildren: () => import('./bins/bins.module').then((m) => m.BinsModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
  { path: '404', component: NotFoundComponent },
];

const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
