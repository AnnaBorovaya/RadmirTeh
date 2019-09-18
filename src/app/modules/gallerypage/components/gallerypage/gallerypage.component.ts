import { Component, OnInit} from '@angular/core';
import { User} from '../../interfaces/user'
import { UserService } from '../../services/user.service';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-gallerypage',
  templateUrl: './gallerypage.component.html',
  styleUrls: ['./gallerypage.component.css']
})
export class GallerypageComponent implements OnInit {

  public dataSource: any;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUserInfo().subscribe((data:User[]) => {
      this.dataSource= new MatTableDataSource(data.concat(data));
    });
    
  }

  displayedColumns = ['position', 'name', 'username', 'email', 'phone', 'website', 'name', 'username', 'email', 'phone', 'website'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}




