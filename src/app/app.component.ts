import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { JsonService } from './services/apis/json.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgxSkeletonLoaderModule,
    NgxPaginationModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ayyrian-angular-test';

  constructor(public jsonService: JsonService) {}

  async ngOnInit() {
    await this.jsonService.getJsonPlaceholderComments();
  }

  async sort(column: string) {
    this.jsonService.pagination.sortColumn = column;

    if (this.jsonService.pagination.sortDescending) {
      this.jsonService.pagination.sortDescending = false;
    } else {
      this.jsonService.pagination.sortDescending = true;
    }

    await this.jsonService.getJsonPlaceholderComments();
  }

  async search() {
    this.jsonService.pagination.searchTerm =
      this.jsonService.pagination?.searchTerm?.trim();
    await this.jsonService.getJsonPlaceholderComments();
  }

  async getPage(page: number) {
    this.jsonService.pagination.page = page;
    await this.jsonService.getJsonPlaceholderComments();
  }
}
