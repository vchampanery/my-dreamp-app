import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'my-dreamp-app=test';
  servers= [
            {'name':'test1','phone':'123'},
            {'name':'test2','phone':'345'},
          ];
  collection = [];
  showmsg = false;
  p = 1;
  constructor(private http: HttpClient){
    for(let i=1;i<=100;i++){
      let Obj = {'name': `Employee Name ${i}`,'code': `EMP00 ${i}`}
      this.collection.push(Obj);
    }
  }
  ngOnInit() {
    
    this.http.get<any>('http://62.75.137.184:8000/api/products').subscribe(data => {
      // this.totalAngularPackages = data.total;
      console.dir(data.data);
      this.servers = data.data;
    })       
  }

  //remove
  remove(id:any){
    console.dir("call remove : "+id);
    this.showmsg = false;
  }
  edit(id:any){
    console.dir("call edit : "+id);
    this.showmsg = true;
  }
  //save
  save(){
    console.dir("call save");
  }
}
