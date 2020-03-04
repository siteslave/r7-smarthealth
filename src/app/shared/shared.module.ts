import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { ModalTransitInfoComponent } from './modal-transit-info/modal-transit-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule } from 'ngx-loading';
import { ModalNhsoSettingComponent } from './modal-nhso-setting/modal-nhso-setting.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModalTransitInfoComponent, ModalNhsoSettingComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [ModalTransitInfoComponent, ModalNhsoSettingComponent],
  providers: [CookieService]
})
export class SharedModule { }
