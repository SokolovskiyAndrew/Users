import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserCrudService } from '../../core/services';
import { getUserList, getUserListSuccess } from './user.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userCrudService: UserCrudService
  ) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserList),
      switchMap(() => {
        return this.userCrudService
          .getUserList()
          .pipe(map((userList) => getUserListSuccess({ userList })));
      })
    )
  );
}
