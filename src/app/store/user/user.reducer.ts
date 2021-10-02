import { Action, createReducer, on } from '@ngrx/store';
import {
  addUser,
  deleteUser,
  editUser,
  getUserListSuccess,
} from './user.actions';
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
  })),
  on(deleteUser, (state: UserState, { userId }) => ({
    ...state,
    userList: deleteUserFromList(userId, state.userList),
  })),
  on(addUser, (state: UserState, { userInfo }) => ({
    ...state,
    userList: createUser(userInfo, state.userList),
  })),
  on(editUser, (state: UserState, { userInfo }) => ({
    ...state,
    userList: editUserInfo(userInfo, state.userList),
  }))
);

export function UserReducer(
  state: UserState | undefined,
  action: Action
): UserState {
  return reducer(state, action);
}

export function deleteUserFromList(userId: number, userList: User[]): User[] {
  return userList.filter((user) => user.id !== userId);
}

export function createUser(userInfo: User, userList: User[]): User[] {
  const newId = userList[userList.length - 1].id + 1;
  return [
    {
      ...userInfo,
      id: newId,
    },
    ...userList,
  ];
}

export function editUserInfo(userInfo: User, userList: User[]): User[] {
  return userList.map((user) => {
    if (user.id === userInfo.id) {
      return {
        ...userInfo,
      };
    }

    return user;
  });
}
