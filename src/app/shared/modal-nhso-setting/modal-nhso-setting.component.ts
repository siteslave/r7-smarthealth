import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

@Component({
  selector: 'app-modal-nhso-setting',
  templateUrl: './modal-nhso-setting.component.html',
  styles: []
})
export class ModalNhsoSettingComponent implements OnInit {
  @Output() onSaved: EventEmitter<any> = new EventEmitter();
  @ViewChild('content', { static: true }) private content: any;

  userPersonId: any;
  smctoken: any;

  r7Token: any;

  provider = 'r7';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {

    this.userPersonId = localStorage.getItem('nhsoUserPersonId');
    this.smctoken = localStorage.getItem('nhsoSmctoken');
    this.r7Token = localStorage.getItem('r7Token');
    this.provider = localStorage.getItem('provider') || 'r7';

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

  saveSetting() {
    localStorage.setItem('nhsoUserPersonId', this.userPersonId);
    localStorage.setItem('nhsoSmctoken', this.smctoken);

    localStorage.setItem('provider', this.provider);
    localStorage.setItem('r7Token', this.r7Token);

    this.onSaved.emit(true);
    this.modalService.dismissAll();
  }
}
