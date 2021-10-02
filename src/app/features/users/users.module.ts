import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  UsersListComponent,
  UserItemComponent,
  UserModalFormComponent,
} from './components';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UsersListComponent, UserItemComponent, UserModalFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModalModule],
  exports: [UsersListComponent],
})
export class UsersModule {}
