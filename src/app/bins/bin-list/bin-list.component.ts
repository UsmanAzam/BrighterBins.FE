import { Component, OnInit } from '@angular/core';
import { Bin } from 'src/app/_models/bin';
import { BinService } from 'src/app/_services/bin.service';
import { QueryOptions } from 'src/app/_utils/query-options';
import { BinLocationComponent } from '../components/bin-location/bin-location.component';
import { BinMessagesChartComponent } from '../components/bin-messages-chart/bin-messages-chart.component';

@Component({
  selector: 'app-bin-list',
  templateUrl: './bin-list.component.html',
  styleUrls: ['./bin-list.component.css'],
})
export class BinListComponent implements OnInit {
  bins: Bin[] = [];
  mapComponent = BinLocationComponent;
  chartComponent = BinMessagesChartComponent;
  query: QueryOptions = new QueryOptions();
  constructor(private binService: BinService) {}

  async ngOnInit() {
    this.bins = await this.binService.getBinPagedList(this.query);
  }
}
