import { ActionReducerMap } from '@ngrx/store';
import { UserEffects } from './user/user.effects';
import { UserReducer, UserState } from './user/user.reducer';

export interface AppState {
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: UserReducer,
};

export const effects = [UserEffects];
