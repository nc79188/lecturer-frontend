import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import { ServerService } from './server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lecturers';
  name:string = '';
  className:string = '';
  constructor(public dialog:MatDialog,private server:ServerService) {}


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {name:this.name,className:this.className}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.server.saveLecturer(result);
    });
  }

}
