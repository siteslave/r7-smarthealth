import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

const rnd = Math.random();

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
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
