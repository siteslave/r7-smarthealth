import { Component, OnInit, ViewChild } from '@angular/core';
import { SmartHealthService } from 'src/app/shared/smarthealth.service';
import { AlertService } from 'src/app/shared/alert.service';
import { ModalNhsoSettingComponent } from 'src/app/shared/modal-nhso-setting/modal-nhso-setting.component';
import * as moment from 'moment';

@Component({
  selector: 'app-rights',
  templateUrl: './rights.component.html',
  styleUrls: ['./rights.component.css']
})
export class RightsComponent implements OnInit {

  @ViewChild('mdlNhsoSetting') private mdlNhsoSetting: ModalNhsoSettingComponent;

  cid: any;
  userPersonId: any;
  smctoken: any;
  personId: any;

  birthdate: any;
  cardid: any;
  expdate: any;
  fname: any;
  hmain: any;
  hmainName: any;
  hsub: any;
  hsubName: any;
  lname: any;
  maininscl: any;
  maininsclMain: any;
  maininsclName: any;
  nation: any;
  sex: any;
  startdate: any;
  subinscl: any;
  subinsclName: any;
  title: any;
  titleName: any;
  wsStatus: any;
  wsStatusDesc: any;

  statusDesc: any;
  status: any;

  wsidBatch: any;

  loading = false;

  constructor(
    private smartHealthService: SmartHealthService,
    private alertService: AlertService
  ) {
    this.userPersonId = localStorage.getItem('nhsoUserPersonId');
    this.smctoken = localStorage.getItem('nhsoSmctoken');
  }

  ngOnInit(): void {
  }

  onSaveSetting(event: any) {
    if (event) {
      this.userPersonId = localStorage.getItem('nhsoUserPersonId');
      this.smctoken = localStorage.getItem('nhsoSmctoken');
    }
  }

  onEnterSearch(event: any) {
    if (this.cid) {
      if (event.keyCode === 13) {
        this.search();
      }
    }
  }

  settingNhso() {
    this.mdlNhsoSetting.open();
  }

  async search() {
    if (this.userPersonId && this.smctoken) {
      if (this.cid) {
        this.loading = true;
        try {
          const rs: any = await this.smartHealthService.searchNhsoRight(this.userPersonId, this.cid, this.smctoken);
          this.loading = false;
          if (rs.ws_status === 'NHSO-000001') {
            this.personId = rs.person_id;
            this.fname = rs.fname;
            this.lname = rs.lname;
            this.birthdate = moment(rs.birthdate, 'YYYYMMDD').locale('th').format('D MMM YYYY');
            this.maininscl = rs.maininscl;
            this.maininsclName = rs.maininscl_name;
            this.subinscl = rs.subinscl;
            this.subinsclName = rs.subinscl_name;
            this.title = rs.title;
            this.titleName = rs.title_name;
            this.cardid = rs.cardid;
            this.startdate = rs.startdate ? moment(rs.startdate, 'YYYYMMDD').locale('th').format('D MMM YYYY') : '';
            this.expdate = moment(rs.expdate).isValid() ? moment(rs.expdate, 'YYYYMMDD').locale('th').format('D MMM YYYY') : rs.expdate;
            this.hmain = rs.hmain;
            this.hmainName = rs.hmain_name;
            this.hsub = rs.hsub;
            this.hsubName = rs.hsub_name;
            this.statusDesc = rs.status_desc;
            this.titleName = rs.title_name;
            this.wsidBatch = rs.wsid_batch;
          } else {
            this.alertService.warning('ไม่พบข้อมูล');
            this.personId = '';
            this.fname = '';
            this.lname = '';
            this.birthdate = '';
            this.maininscl = '';
            this.maininsclName = '';
            this.subinscl = '';
            this.subinsclName = '';
            this.title = '';
            this.titleName = '';
            this.cardid = '';
            this.startdate = '';
            this.expdate = '';
            this.hmain = '';
            this.hmainName = '';
            this.hsub = '';
            this.hsubName = '';
            this.statusDesc = '';
            this.titleName = '';
            this.wsidBatch = '';
          }
        } catch (error) {
          this.loading = false;
          console.log(error);
          this.alertService.error('เกิดข้อผิดพลาด [local]');
        }
      } else {
        this.alertService.warning('กรุณาระบุหมายเลขบัตรประชาชน');
      }
    } else {
      this.alertService.error('กรุณาตั้งค่าการตรวจสอบสิทธิ์กับ สปสช.');
    }

  }

}
