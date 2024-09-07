import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../../models/users';
import { UserService } from '../../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { UserListItemComponent } from '../../../components/admin-components/user-list-item/user-list-item.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    UserListItemComponent,
    AddUserComponent,
    EditUserComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit, OnDestroy, OnChanges{
  titlePage: string = 'покупатели'; 
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

      // this.userService.getAllUser().subscribe((data)=>{
      //   this.users = data;
        
      //   console.log(this.users);
      // });
    
  }
  ngOnDestroy(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  // reloadCurrentPage() {

  //   this.router.navigateByUrl(localStorage.getItem('current-url')!);;
  //  }



}
