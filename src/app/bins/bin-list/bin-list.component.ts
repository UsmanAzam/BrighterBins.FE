import { Component, OnInit } from '@angular/core';
import { Bin } from 'src/app/_models/bin';
import { BinService } from 'src/app/_services/bin.service';

@Component({
  selector: 'app-bin-list',
  templateUrl: './bin-list.component.html',
  styleUrls: ['./bin-list.component.css'],
})
export class BinListComponent implements OnInit {
  bins: Bin[] = [];
  constructor(private binService: BinService) {}

  async ngOnInit() {
    this.bins = await this.binService.getBinList();
  }
}
