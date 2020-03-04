import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransitRoutingModule } from './transit-routing.module';
import { TransitComponent } from './transit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule } from 'ngx-loading';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TransitComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    TransitRoutingModule,
    SharedModule,
  ]
})
export class TransitModule { }
