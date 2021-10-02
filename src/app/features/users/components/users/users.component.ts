import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../store';
import { User } from '../../../../core/interfaces';
import { userList } from '../../../../store/user/user.selector';
import { getUserList } from '../../../../store/user/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList$: Observable<User[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  addUser(): void {}

  editUser(): void {}

  deleteUser(): void {}

  trackUserById(index: number, user: User): number {
    return user.id;
  }

  private getUsersList(): void {
    this.store.dispatch(getUserList());
    this.userList$ = this.store.select(userList);
  }
}
