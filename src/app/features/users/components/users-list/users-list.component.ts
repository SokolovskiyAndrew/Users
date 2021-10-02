import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from '../../../../store';
import { User } from '../../../../core/interfaces';
import { userList } from '../../../../store/user/user.selector';
import { getUserList } from '../../../../store/user/user.actions';
import { UserModalFormComponent } from '../user-modal-form/user-modal-form.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  userList$: Observable<User[]>;

  constructor(private store: Store<AppState>, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  addUser(): void {}

  editUser(userInfo: User): void {
    const modalRef: NgbModalRef = this.modalService.open(
      UserModalFormComponent
    );
    modalRef.componentInstance.title = 'New User';
    modalRef.componentInstance.userInfo = userInfo;

    modalRef.closed.subscribe((userData) => {
      console.log(userData);
      if (userData) {
        //TODO: send request to edit existed user
      }
    });
  }

  deleteUser(userId: number): void {}

  openModal(): void {
    const modalRef: NgbModalRef = this.modalService.open(
      UserModalFormComponent
    );
    modalRef.componentInstance.title = 'New User';
    modalRef.closed.subscribe((userData) => {
      console.log(userData);
      if (userData) {
        //TODO: send request to save new user
      }
    });
  }

  trackUserById(index: number, user: User): number {
    return user.id;
  }

  private getUsersList(): void {
    this.store.dispatch(getUserList());
    this.userList$ = this.store.select(userList);
  }
}
