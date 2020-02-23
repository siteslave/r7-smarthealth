import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentsRoutingModule } from './consents-routing.module';
import { ConsentsComponent } from './consents.component';


@NgModule({
  declarations: [ConsentsComponent],
  imports: [
    CommonModule,
    ConsentsRoutingModule
  ]
})
export class ConsentsModule { }
