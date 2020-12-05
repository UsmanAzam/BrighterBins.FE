import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BinService } from 'src/app/_services/bin.service';
@Component({
  selector: 'app-bin-messages-chart',
  templateUrl: './bin-messages-chart.component.html',
  styleUrls: ['./bin-messages-chart.component.css'],
})
export class BinMessagesChartComponent implements OnInit {
  binId: any;
  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Fill Levels' },
  // ];
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor(private binService: BinService) {}

  async ngOnInit() {
    const msgs = await this.binService.getMessagesByBin(this.binId);
    console.log(JSON.stringify(msgs));
    this.lineChartData = [
      { data: msgs.map((a) => a.fill), label: 'Fill Levels' },
    ];
    this.lineChartLabels = msgs.map((a) => a.time + '');
  }
}
