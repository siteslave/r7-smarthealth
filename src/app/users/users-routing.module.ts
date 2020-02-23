import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'consents', loadChildren: () => import('./consents/consents.module').then(m => m.ConsentsModule) },
      { path: 'history', loadChildren: () => import('./history/history.module').then(m => m.HistoryModule) },
      { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
