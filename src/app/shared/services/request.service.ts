import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

export enum Routes{
  users = 'users',
  posts = 'posts'
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url = environment.host;

  constructor(
      private http: HttpClient
  ) { }

  get$<T = any>(route: Routes | string): Observable<T>{
    return this.http.get<T>(`${this.url}/${route}`)

  }

  post$(){}
  put$(){}
  patch$(){}
}
