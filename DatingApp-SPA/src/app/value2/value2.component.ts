import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value2',
  templateUrl: './value2.component.html',
  styleUrls: ['./value2.component.scss']
})
export class Value2Component implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getValues();
  }

  // tslint:disable-next-line: typedef
  getValues(){
    this.http.get('http://localhost:5000/api/values').subscribe(response =>
    {this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
