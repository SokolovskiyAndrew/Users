import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { AppState } from '../index';

export const userState = (state: AppState) => state.user;

export const userList = createSelector(
  userState,
  (state: UserState) => state.userList
);
