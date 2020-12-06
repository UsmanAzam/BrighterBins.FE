import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bin } from 'src/app/_models/bin';
import { BinService } from 'src/app/_services/bin.service';

@Component({
  selector: 'app-bin-details',
  templateUrl: './bin-details.component.html',
  styleUrls: ['./bin-details.component.css'],
})
export class BinDetailsComponent implements OnInit {
  bin: Bin;
  constructor(private binService: BinService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const binId = +paramMap.get('id');
      if (binId) {
        this.binService.getBinById(binId).subscribe((data) => {
          this.bin = data;
        });
      }
    });
  }
}
