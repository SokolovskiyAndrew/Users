import { Action, createReducer, on } from '@ngrx/store';
import { getUserListSuccess } from './user.actions';
import { User } from '../../core/interfaces';

export interface UserState {
  userList: User[];
}

const initialState: UserState = {
  userList: [],
};

export const reducer = createReducer(
  initialState,
  on(getUserListSuccess, (state: UserState, { userList }) => ({
    ...state,
    userList: userList,
  }))
);

export function UserReducer(
  state: UserState | undefined,
  action: Action
): UserState {
  return reducer(state, action);
}
