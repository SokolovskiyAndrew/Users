import { createAction, props } from '@ngrx/store';
import { User } from '../../core/interfaces';
import { UserActionsEnum } from '../../core/enums';

export const getUserList = createAction(UserActionsEnum.GetUserList);

export const getUserListSuccess = createAction(
  UserActionsEnum.GetUserListSuccess,
  props<{ userList: User[] }>()
);
