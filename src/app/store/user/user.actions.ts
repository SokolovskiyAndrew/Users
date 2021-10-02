import { createAction, props } from '@ngrx/store';
import { User } from '../../core/interfaces';
import { UserActionsEnum } from '../../core/enums';

export const getUserList = createAction(UserActionsEnum.GetUserList);
export const getUserListSuccess = createAction(
  UserActionsEnum.GetUserListSuccess,
  props<{ userList: User[] }>()
);

export const addUser = createAction(
  UserActionsEnum.AddUser,
  props<{ userInfo: User }>()
);

export const deleteUser = createAction(
  UserActionsEnum.DeleteUser,
  props<{ userId: number }>()
);

export const editUser = createAction(
  UserActionsEnum.EditUser,
  props<{ userInfo: User }>()
);
