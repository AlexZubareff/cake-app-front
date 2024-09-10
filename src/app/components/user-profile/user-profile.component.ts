import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/users';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  user: IUser

  constructor( private userService: UserService ){}


  ngOnInit(): void {
    this.user = this.userService.getUser();

    console.log('Пользователь в профиле: ', this.user)
  }


}
