import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransitComponent } from './transit.component';

const routes: Routes = [{ path: '', component: TransitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransitRoutingModule { }
