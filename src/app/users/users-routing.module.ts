import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

const rnd = Math.random();

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      { path: '', redirectTo: 'transit', pathMatch: 'full' },
      { path: 'transit', loadChildren: () => import('./transit/transit.module').then(m => m.TransitModule) },
      { path: 'rights', loadChildren: () => import('./rights/rights.module').then(m => m.RightsModule) },
      { path: 'patient-info', loadChildren: () => import('./patient-info/patient-info.module').then(m => m.PatientInfoModule) },
      { path: 'allergy', loadChildren: () => import('./allergy/allergy.module').then(m => m.AllergyModule) },
      { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
