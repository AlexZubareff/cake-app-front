import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RestUserService } from '../../services/rest/user/rest-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/users';
import { RegistrationComponent } from '../registration/registration.component';
import { CartService } from '../../services/cart/cart.service';
import { CartComponent } from '../cart/cart.component';
import { Subscription } from 'rxjs';
import { IProductInCart } from '../../models/product';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit, AfterViewInit, OnDestroy {
  authForm: FormGroup;
  authUser: IUser | undefined;
  public cart: IProductInCart[] | null;

  newProductsInCart: Subscription;
  userServerCart: Subscription;

  constructor(
    private restUserService: RestUserService, 
    private cartService: CartService,
    private router: Router,
    private userService: UserService,
    
  ){
    
  }
  ngOnInit(): void {
    
        // init formGroup
        this.authForm = new FormGroup({
          login: new FormControl('', [Validators.required,Validators.minLength(3)]),
          password: new FormControl('', [Validators.required, Validators.minLength(2)]),
  
          
    
        });

        this.userServerCart  = this.cartService.newProductsInCart$.subscribe(
          (data: any) => {
              console.log('Корзина пользователя с сервера при авторизации: ' ,data);
           
            this.cart = data;
          }
        );

  }
  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }

  AuthOnSubmit(){
    const userData = this.authForm.getRawValue();
    console.log('auth user data: ', userData)

    this.restUserService.authUser(userData, userData.login).subscribe((data) => {

      console.log('auth User Data from server: ', data);
      


      this.userService.setUser(data);
      const token: string = data.access_token;
      this.userService.setToken(token);

      // Получение корзины пользователя

      this.cartService.getUserCart(data.cartId!);


      // console.log('Корзина пользователя с сервера при авторизации: ', this.userServerCart);



      this.closeAuthModal();

      this.router.navigate(['']);

    }
    ,(err: HttpErrorResponse) => {
      const serverError = err.error;
      console.log(serverError.errorText)
      // this.messageService.add({severity:'warn', summary:'Service Message', detail:serverError.errorText});
      console.log('auth false');
    })
  }

  goToRegSubmit(){
    console.log("goToRegSubmit");

  }

  closeAuthModal(){
    const element = document.getElementById('authModal');
    // console.log(element);
    element?.removeAttribute("aria-modal");
    element?.removeAttribute("open");
  }
}
