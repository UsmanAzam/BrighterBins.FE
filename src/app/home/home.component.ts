import { Component, OnInit } from '@angular/core';
import { BinService } from '../_services/bin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  binCount = 0;
  constructor(private binService: BinService) {}

  async ngOnInit() {
    this.binCount = await this.binService.getBinCount();
  }
}
