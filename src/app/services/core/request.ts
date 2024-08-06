import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor() {}

  async get(url: string) {
    return await new Promise((resolve, reject) => {
      try {
        fetch(`${this.BASE_URL}/${url}`)
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  }

  async post(url: string, data: any) {
    return await new Promise((resolve, reject) => {
      try {
        fetch(`${this.BASE_URL}/${url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  }

  async put(url: string, data: any) {
    return await new Promise((resolve, reject) => {
      try {
        fetch(`${this.BASE_URL}/${url}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  }

  async delete(url: string) {
    return await new Promise((resolve, reject) => {
      try {
        fetch(`${this.BASE_URL}/${url}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  }
}
