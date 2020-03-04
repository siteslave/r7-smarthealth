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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {

    this.userPersonId = localStorage.getItem('nhsoUserPersonId');
    this.smctoken = localStorage.getItem('nhsoSmctoken');

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
    this.onSaved.emit(true);
    this.modalService.dismissAll();
  }
}
