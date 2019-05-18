import {Injectable} from '@angular/core';
import {IProfile} from '../interfaces/IUser';
import {Observable, of} from 'rxjs';
import {RequestService, Routes} from './request.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: IProfile[];
  constructor(
      private requestService: RequestService
  ) {}

  public getUsers$(): Observable<IProfile[]>{
    if (this.users) return of(this.users);
    return this.requestService.get$(Routes.users)
  }

  public getUser$(id: number): Observable<IProfile>{
    if (this.users) return of(this.users.find(u => u.id === id));
    return this.requestService.get$<IProfile>(`${Routes.users}/${id}/`)
  }
}
