import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../models/users';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit, OnDestroy, OnChanges{

  public user: IUser;

  constructor(
    private userService: UserService,
  ) { }
 ngOnInit(): void {
  this.user = this.userService.getUser();
  console.log(this.user)
 }

 
 ngOnChanges(changes: SimpleChanges): void {
  this.user = this.userService.getUser();
  console.log(this.user)
 }


 ngOnDestroy(): void {
   throw new Error('Method not implemented.');
 }


}
