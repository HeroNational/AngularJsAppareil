import { Component, OnInit, Input } from '@angular/core';
import { swal } from 'sweet-alert';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: String;
  @Input() appareilStatus: Boolean = true;
  constructor() { }
  ngOnInit(): void {
  }
  getStatus() {
    return this.appareilStatus
  }
  getName() {
    return this.appareilName
  }
  setStatus(value: Boolean) {
    this.appareilStatus = value;
  }

  onIt() {
    this.setStatus(true);
    alert;
  }
  offIt() {
    setTimeout(
      () => {
        this.setStatus(false)
      }, 200);
  }
}
