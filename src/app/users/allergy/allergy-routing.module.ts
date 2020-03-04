import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllergyComponent } from './allergy.component';

const routes: Routes = [{ path: '', component: AllergyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllergyRoutingModule { }
