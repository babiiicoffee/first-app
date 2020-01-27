import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiData } from '../app/apiData'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<ApiData[]>(this.apiUrl);
  }
}