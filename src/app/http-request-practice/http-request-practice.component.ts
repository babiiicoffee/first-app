import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiData } from '../apiData'
import { DataServiceService } from '../data-service.service'

@Component({
  selector: 'app-http-request-practice',
  templateUrl: './http-request-practice.component.html',
  styleUrls: ['./http-request-practice.component.css']
})
export class HttpRequestPracticeComponent implements OnInit {

  public apiURL = 'http://jsonplaceholder.typicode.com/users'
  public apiDataList: ApiData[];

  constructor(private serveData: DataServiceService, private http: HttpClient) { }

  ngOnInit() {
    this.serveData.getData().subscribe(Data => this.apiDataList = Data);
  }

  //  getData() {
  //   const data = this.http.get<ApiData[]>(this.apiURL).subscribe((Data: any[]) =>
  //     this.apiDataList = Data
  //   )
  //   return data;  
  // }

  onSubmit(){
    console.log(this.apiDataList)
  }

}
