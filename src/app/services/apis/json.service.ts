import { Injectable } from '@angular/core';
import { Comment } from '../core/iApp';
import { RequestsService } from '../core/request';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  comments: Comment[] = [];
  loading: boolean = false;
  pagination: {
    page: any;
    limit: number;
    sortColumn: string;
    sortDescending: boolean;
    searchTerm?: string;
  } = {
    page: 1,
    limit: 10,
    sortColumn: 'name',
    sortDescending: false,
    searchTerm: '',
  };

  constructor(private api: RequestsService) {}

  async getJsonPlaceholderComments() {
    return await new Promise(async (resolve, reject) => {
      try {
        this.comments = [];
        await new Promise((resolve) => setTimeout(resolve, 1000));
        this.loading = true;
        const response = await this.api.get(
          `comments?_limit=${this.pagination.limit}&_sort=${
            this.pagination.sortColumn
          }&_order=${this.pagination.sortDescending ? 'desc' : 'asc'}&_page=${
            this.pagination.page
          }&email_like=${this.pagination.searchTerm}`
        );
        this.comments = response as Comment[];
        this.loading = false;
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}
