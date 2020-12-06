import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/_models/page';

@Component({
  selector: '[app-paginator]',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input() page: Page<any>;
  @Output() nextPageEvent = new EventEmitter();
  @Output() previousPageEvent = new EventEmitter();
  @Output() pageSizeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private route: Router) {}

  ngOnInit() {}

  nextPage(): void {
    this.page.pageNumber++;
    this.route.navigate(['/bins'], {
      queryParams: {
        page_number: this.page.pageNumber,
        page_size: this.page.pageSize,
      },
    });
  }

  previousPage(): void {
    this.page.pageNumber--;
    this.route.navigate(['/bins'], {
      queryParams: {
        page_number: this.page.pageNumber,
        page_size: this.page.pageSize,
      },
    });
  }

  updatePageSize(event: any): void {
    this.page.pageNumber = 1;
    this.route.navigate(['/bins'], {
      queryParams: {
        page_number: this.page.pageNumber,
        page_size: this.page.pageSize,
      },
    });
  }
}
