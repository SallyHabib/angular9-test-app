import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MyApiService {

  constructor(
    private http: HttpClient
  ) { }


  getmyProfile() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url, { observe: 'response' });
  }

}
