import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllergyRoutingModule } from './allergy-routing.module';
import { AllergyComponent } from './allergy.component';


@NgModule({
  declarations: [AllergyComponent],
  imports: [
    CommonModule,
    AllergyRoutingModule
  ]
})
export class AllergyModule { }
