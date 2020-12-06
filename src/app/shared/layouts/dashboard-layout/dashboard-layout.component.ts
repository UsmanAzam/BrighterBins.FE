import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})
export class DashboardLayoutComponent implements OnInit {
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

  ngOnInit(): void {}
}
