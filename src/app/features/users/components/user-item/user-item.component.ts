import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../../core/interfaces';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() userInfo: User;
  @Output() deleteUserAction: EventEmitter<number> = new EventEmitter<number>();
  @Output() editUserAction: EventEmitter<User> = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  editUser(): void {
    this.editUserAction.emit(this.userInfo);
  }

  deleteUser(userId: number): void {
    this.deleteUserAction.emit(userId);
  }
}
