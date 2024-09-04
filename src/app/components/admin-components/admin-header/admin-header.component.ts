import { Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../../models/users';
import { Subscription } from 'rxjs';
import { UserService } from '../../../services/user/user.service';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent implements OnInit, OnDestroy, OnChanges{

  public user: IUser | null;


  userUnsubscribe: Subscription;

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private router: Router,
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
     this.router.navigate(['']);
    }
   
   userExit() {
     window.localStorage.removeItem(
       'user-private-token'
       );
       this.userService.unSetUser();
       
       console.log('USER после выхода: ', this.user)
   }


}
