import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../../models/users';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent implements OnInit, OnDestroy, OnChanges{
users: IUser[];

constructor(
  private router: Router,
  private userService: UserService
) { }

ngOnInit(): void {
  //Добавляет текущий URL в LocalStoradge
      window.localStorage.setItem(
        'current-url',
        this.router.url,)
  
        this.userService.getAllUser().subscribe((data)=>{
          this.users = data;
          
          console.log(this.users);
        });
      
    }
    ngOnDestroy(): void {
      
    }
    ngOnChanges(changes: SimpleChanges): void {
    }

    goToUserEditPage(){
      this.router.navigate(['admin/users/edit'])
    }
}
