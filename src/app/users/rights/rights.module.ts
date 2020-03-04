import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RightsRoutingModule } from './rights-routing.module';
import { RightsComponent } from './rights.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule } from 'ngx-loading';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RightsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgxLoadingModule.forRoot({}),
    RightsRoutingModule,
    SharedModule
  ]
})
export class RightsModule { }
