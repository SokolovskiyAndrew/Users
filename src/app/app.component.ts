import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userList } from './store/user/user.selector';
import { getUserList } from './store/user/user.actions';
import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getUserList());

    this.store.select(userList).subscribe((data) => {
      console.log(data);
    });
  }
}
