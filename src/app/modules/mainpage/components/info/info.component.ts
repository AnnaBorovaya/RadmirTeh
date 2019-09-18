import { Component, OnInit } from '@angular/core';
import { InfoserviceService } from '../../services/infoservice.service';
import { Post } from '../../interfaces/post';
import { Store, select } from '@ngrx/store';
import * as Actions from '../../../../actions/actions'

@Component({
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
  public posts: Post[];

  constructor(
    private store: Store<any>,
    private infoserviceService: InfoserviceService,
  ) { }

  ngOnInit() {
    this.infoserviceService.getPostInfo().subscribe((data:any) => {
      this.posts = data.slice(0,12);
      this.store.dispatch({ type: Actions.ADD_POST, payload: data.slice(0,12)})
    });
    
  }

}
