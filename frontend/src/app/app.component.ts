import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Fit Foodie';
  navLinks = ['Dashboard', 'Goals']
  activeLink = this.navLinks[0]
}
