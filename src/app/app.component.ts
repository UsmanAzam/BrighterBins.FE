import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'brighter-bins-fe';
  menu: any[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true,
    },
    {
      title: 'Bins',
      icon: 'trash-2-outline',
      link: '/bins',
      home: true,
    },
    {
      title: 'Logout',
      icon: 'log-out-outline',
      link: '/logout',
      home: true,
    },
  ];
  constructor(private sidebarService: NbSidebarService) {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
