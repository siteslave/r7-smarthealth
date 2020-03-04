import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

@Component({
  selector: 'app-modal-transit-info',
  templateUrl: './modal-transit-info.component.html',
  styles: []
})
export class ModalTransitInfoComponent implements OnInit {
  @ViewChild('content', { static: true }) private content: any;

  GIVENNAME: any;
  MIDDLENAME: any;
  SURNAME: any;
  SEX: any;
  DOCUMENTTYPE: any;
  DOCUMENTNO: any;
  FLIGHTNO: any;
  CITIZENID: any;
  COUNTRY: any;
  NATION: any;
  PROVINCE: any;
  TRAN_DATE: any;
  TRANSACTIONTYPE: any;
  DEPARTMENT: any;
  DATE_OF_BIRTH: any;
  CREATE_DATE: any;
  CREATE_BY: any;
  UPDATE_DATE: any;
  UPDATE_BY: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(info: any) {

    if (_.has(info, 'GIVENNAME')) {
      this.GIVENNAME = _.has(info, 'GIVENNAME') ? info.GIVENNAME : '-';
      this.MIDDLENAME = _.has(info, 'MIDDLENAME') ? info.MIDDLENAME : '-';
      this.SURNAME = _.has(info, 'SURNAME') ? info.SURNAME : '-';
      this.SEX = _.has(info, 'SEX') ? info.SEX : '-';
      this.DOCUMENTTYPE = _.has(info, 'DOCUMENTTYPE') ? info.DOCUMENTTYPE : '-';
      this.DOCUMENTNO = _.has(info, 'DOCUMENTNO') ? info.DOCUMENTNO : '-';
      this.FLIGHTNO = _.has(info, 'FLIGHTNO') ? info.FLIGHTNO : '-';
      this.CITIZENID = _.has(info, 'CITIZENID') ? info.CITIZENID : '-';
      this.COUNTRY = _.has(info, 'COUNTRY') ? info.COUNTRY : '-';
      this.NATION = _.has(info, 'NATION') ? info.NATION : '-';
      this.PROVINCE = _.has(info, 'PROVINCE') ? info.PROVINCE : '-';
      this.TRAN_DATE = _.has(info, 'TRAN_DATE') ? info.TRAN_DATE : '-';
      this.TRANSACTIONTYPE = _.has(info, 'TRANSACTIONTYPE') ? info.TRANSACTIONTYPE : '-';
      this.DEPARTMENT = _.has(info, 'DEPARTMENT') ? info.DEPARTMENT : '-';
      this.DATE_OF_BIRTH = _.has(info, 'DATE_OF_BIRTH') ? info.DATE_OF_BIRTH : '-';
      this.CREATE_DATE = _.has(info, 'CREATE_DATE') ? info.CREATE_DATE : '-';
      this.CREATE_BY = _.has(info, 'CREATE_BY') ? info.CREATE_BY : '-';
      this.UPDATE_DATE = _.has(info, 'UPDATE_DATE') ? info.UPDATE_DATE : '-';
      this.UPDATE_BY = _.has(info, 'UPDATE_BY') ? info.UPDATE_BY : '-';
    }

    this.modalService
      .open(this.content, {
        ariaLabelledBy: 'modal-title',
        centered: true,
        backdrop: 'static',
        size: 'lg',
        scrollable: true
      })
      .result
      .then((result) => { }, (reason) => { });
  }


}
