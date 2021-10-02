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
  @Output() editUserAction: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  editUser(userId: number): void {
    this.editUserAction.emit(userId);
  }

  deleteUser(userId: number): void {
    this.deleteUserAction.emit(userId);
  }
}
