import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserCrudService {
  private readonly jsonUrl = 'assets/data/users.json';

  constructor(private http: HttpClient) {}

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl);
  }
}
