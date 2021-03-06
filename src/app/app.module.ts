import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeTh from '@angular/common/locales/th';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DateFormatService } from './shared/date-format.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

registerLocaleData(localeTh, 'th');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    CookieService,
    { provide: LOCALE_ID, useValue: 'th' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: NgbDateParserFormatter, useClass: DateFormatService },
    { provide: 'LOGIN_URL', useValue: environment.smartHealthGetTokenUrl },
    { provide: 'SMARTHEALTH_IMMIGRATION_URL', useValue: environment.smartHealthImmigrationUrl },
    { provide: 'NHSO_URL', useValue: environment.nhsoUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
