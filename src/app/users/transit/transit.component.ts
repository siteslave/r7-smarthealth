import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalTransitInfoComponent } from 'src/app/shared/modal-transit-info/modal-transit-info.component';
import { SmartHealthService } from 'src/app/shared/smarthealth.service';
import { AlertService } from 'src/app/shared/alert.service';

import * as moment from 'moment';

@Component({
  selector: 'app-transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.css']
})
export class TransitComponent implements OnInit {

  @ViewChild('mdlInfo') private mdlInfo: ModalTransitInfoComponent;

  query: any;
  results: any = [];
  loading = false;


  constructor(private smartHealthService: SmartHealthService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  async searchByDocumentNo() {
    if (this.query) {
      this.loading = true;
      try {
        const rs: any = await this.smartHealthService.searchTransitWithDocumentNo(this.query);
        this.loading = false;
        this.results = rs;
      } catch (error) {
        this.loading = false;
        this.alertService.error('เกิดข้อผิดพลาด');
      }
    }
  }

  async searchByCid() {

    if (this.query) {
      this.loading = true;
      try {
        const rs: any = await this.smartHealthService.searchTransitWithCid(this.query);
        this.loading = false;
        this.results = rs.map(v => {
          v.TRAN_DATE = `${moment(v.TRAN_DATE, 'x').locale('th').format('DD MMM')} ${moment(v.TRAN_DATE, 'x').get('year') + 543} ${moment(v.TRAN_DATE, 'x').format('HH:mm')}`;
          v.CREATE_DATE = `${moment(v.CREATE_DATE, 'x').locale('th').format('DD MMM')} ${moment(v.CREATE_DATE, 'x').get('year') + 543} ${moment(v.CREATE_DATE, 'x').format('HH:mm')}`;
          v.UPDATE_DATE = `${moment(v.UPDATE_DATE, 'x').locale('th').format('DD MMM')} ${moment(v.UPDATE_DATE, 'x').get('year') + 543} ${moment(v.UPDATE_DATE, 'x').format('HH:mm')}`;
          return v;
        });
      } catch (error) {
        this.loading = false;
        this.alertService.error('เกิดข้อผิดพลาด');
      }
    }
  }

  openInfo(info: any) {
    this.mdlInfo.open(info);
  }
}
