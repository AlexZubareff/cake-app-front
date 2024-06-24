import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../models/users';
import { UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';

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

  public user: IUser | null;

  userUnsubscribe: Subscription;

  constructor(
    private userService: UserService,
  ) { }
  
 ngOnInit(): void {
 this.userUnsubscribe = this.userService.userBehSubject$.subscribe((data) => {
  console.log('subscribe data getUser: ', data);
  this.user = data;
 })

 }


 ngOnChanges(changes: SimpleChanges): void {

 }


 ngOnDestroy(): void {
   throw new Error('Method not implemented.');
 }

userExit() {
  window.localStorage.removeItem(
    'user-private-token'
    );
    this.user = null;
}

}
