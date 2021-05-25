import { Component, OnInit } from '@angular/core';
import Lecturer from '../models/Lecturer';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  lecturers:Lecturer[] = [];
  displayedColumns:string[] = ['id','name','class'];

  constructor(private server:ServerService) { }

  

  ngOnInit(): void {
    this.getData();
  }

  getData():void {
    console.log('called the data')
    this.server.getLecturers().subscribe(list => this.lecturers = list);
  }
}
