import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  ngOnChanges() {
    throw new Error('Method not implemented.');
  }
  title='navbar';

}
