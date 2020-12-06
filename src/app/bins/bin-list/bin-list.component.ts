import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bin } from 'src/app/_models/bin';
import { Page } from 'src/app/_models/page';
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
  page: Page<Bin>;
  constructor(private binService: BinService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params.page_size && params.page_number) {
        this.query.pageSize = params.page_size;
        this.query.pageNumber = params.page_number;
        this.getData();
      }
    });
    this.getData();
  }

  getData() {
    this.binService.getBinPage(this.query).subscribe((data) => {
      this.page = data;
      this.query.pageNumber = data.pageNumber;
      this.query.pageSize = data.pageSize;
    });
  }
}
