import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {
  }

  success(message: string = 'ดำเนินการเรียบร้อย') {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000
    });

    Toast.fire({
      icon: 'success',
      title: message
    });
  }

  error(message: string = 'เกิดข้อผิดพลาด') {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      icon: 'error',
      title: message
    });
  }

  async confirm(text: string = 'ต้องการดำเนินการใช่หรือไม่?', title: string = 'กรุณายืนยัน') {
    const confirm = await Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก'
    });

    if (confirm.value) {
      return true;
    } else {
      return false;
    }
  }

  warning(message: string = 'กรุณาตรวจสอบ') {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      icon: 'warning',
      title: message
    });
  }

  async reload(message: string = 'กรุณาตรวจสอบ') {
    const Toast = await Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      confirmButtonColor: 'red',
      confirmButtonText: '<span class="fa fa-power-off"></span>'
    });

    const Fire = await Toast.fire({
      icon: 'warning',
      title: message
    });
    if (Fire.value) {
      return true;
    } else {
      return false;
    }
  }
}
