import {Component, ElementRef, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IProfile} from '../../shared/interfaces/IUser';
import {fromEvent, of} from 'rxjs';
import {debounceTime, map, distinctUntilChanged, catchError} from 'rxjs/operators';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: IProfile[];
  public err: string;
  public currentViewProfile: IProfile;

  private _cachedUsers: IProfile[];
  constructor(
    private http: HttpClient,
    private elRef: ElementRef,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersService.getUsers$()
      .pipe(
        catchError(err => {
          console.warn(err);
          this.err = `Can't load users :(`;
          return of([])
        })
    ).subscribe(res => this._cachedUsers = this.users = res);

    const searchInput = this.elRef.nativeElement.querySelector('.Search');
    fromEvent<Event>(searchInput, 'input').pipe(
      debounceTime(250),
      map(e => (e.target as HTMLInputElement).value.toLowerCase()),
      distinctUntilChanged()
    ).subscribe(query => {
      if (!query){
        this.users = this._cachedUsers
      } else {
        this.users = this._cachedUsers.filter(u => u.name.toLowerCase().includes(query))
      }
    })
  }

  showMore(profile: IProfile){
    console.log(profile);
    this.currentViewProfile = profile;
  }

}
