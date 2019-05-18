import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProfile} from '../../../shared/interfaces/IUser';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() public profile: IProfile;
  @Output() private onMoreInfo = new EventEmitter<IProfile>();
  constructor() { }

  ngOnInit() {
  }
  more(){
    this.onMoreInfo.emit(this.profile)
  }

}
