import { Component } from '@angular/core';
import { swal } from 'sweet-alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Wahid Hassan';
  isAuth: boolean = false;
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  onAllume() {
    swal("C'est bon");
  }
}
