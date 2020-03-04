

import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class SmartHealthService {

  constructor(
    @Inject('SMARTHEALTH_IMMIGRATION_URL') private immigrationUrl: any,
    @Inject('NHSO_URL') private nhsoUrl: any,
    private http: HttpClient,
    private helperService: HelperService,
  ) { }

  searchTransitWithCid(cid: any) {
    const url = `${this.immigrationUrl}/citizenid/${cid}`;
    const header = this.helperService.getAuthHeader();
    return this.http.get(url, header).toPromise();
  }

  searchTransitWithDocumentNo(documentNo: any) {
    const url = `${this.immigrationUrl}/documentno/${documentNo}`;
    const header = this.helperService.getAuthHeader();
    return this.http.get(url, header).toPromise();
  }

  searchNhsoRight(userPersonId: any, personId: any, smctoken: any) {
    const url = `${this.nhsoUrl}/check-right`;
    return this.http.post(url, {
      userPersonId,
      personId,
      smctoken
    }).toPromise();
  }


}
