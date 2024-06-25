import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../models/users';
import { UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';
import { AuthComponent } from '../../pages/auth/auth.component';
import { RegistrationComponent } from '../../pages/registration/registration.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AuthComponent,
    RegistrationComponent,
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
    private elementRef: ElementRef<HTMLElement>
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

showAuthModal(){
  const element = document.getElementById('authModal');
  // console.log(element);
  element?.setAttribute("aria-modal","true");
  element?.setAttribute("open","open");
  
}

showRegModal(){
  const element = document.getElementById('registrationModal');
  // console.log(element);
  element?.setAttribute("aria-modal","true");
  element?.setAttribute("open","open");
  
}

}
