import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent, UserItemComponent } from './components';

@NgModule({
  declarations: [UsersComponent, UserItemComponent],
  imports: [CommonModule],
  exports: [UsersComponent],
})
export class UsersModule {}
