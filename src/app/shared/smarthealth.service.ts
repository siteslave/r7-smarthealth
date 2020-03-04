

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

  searchRightWithSmartHealth(userPersonId: any, personId: any, smctoken: any) {
    const url = `https://smarthealth.service.moph.go.th/phps/api/nhsodata/v1/search_by_pid?userPersonId=${userPersonId}&smctoken=${smctoken}&personId=${personId}`;
    const header = this.helperService.getAuthHeader();
    return this.http.post(url, {}, header).toPromise();
  }

  searchRightWithR7(userPersonId: any, personId: any, smctoken: any, r7Token: any) {
    const url = `${this.nhsoUrl}/check-right`;

    const header = this.helperService.getR7AuthHeader(r7Token);
    return this.http.post(url, {
      userPersonId,
      personId,
      smctoken
    }, header).toPromise();
  }


}
