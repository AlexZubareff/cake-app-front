import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RestUserService } from '../../services/rest/user/rest-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from '../../services/cart/cart.service';
import { RestCartService } from '../../services/rest/cart/rest-cart.service';
import { ICart } from '../../models/cart';
import { IProductInCart } from '../../models/product';
import { IUser } from '../../models/users';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit, AfterViewInit, OnDestroy {
  regForm: FormGroup;
  newUser: IUser;
  newUserCart: ICart;

  constructor(
    private restUserService: RestUserService,
  private restCartsService: RestCartService){}
  ngOnInit(): void {
    
        // init formGroup
        this.regForm = new FormGroup({
          login: new FormControl('', [Validators.required,Validators.minLength(3)]),
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [Validators.required, Validators.minLength(2)]),
          repeatPassword: new FormControl('', [Validators.required, Validators.minLength(2)]),
  
    
        });
  }
  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }

  onSubmit(){


    let regData = this.regForm.getRawValue();
    console.log('registration user data: ', regData)
    regData.role = 'user';
    regData.cartId = '';

    // Регистрируем пользователя
    this.restUserService.registerUser(regData).subscribe((data)=>{
      console.log('registration User Data: ', data);
      this.newUser = data;
      console.log('New tUser Data: ', this.newUser);


  //Создаем корзину новому пользователю

  this.newUserCart = {
    userId: this.newUser._id,
    cart: [],

  } 
console.log('newUserCart: ', this.newUserCart);


this.restCartsService.addCart(this.newUserCart).subscribe((data)=>{
  console.log('newUserCart: ', data);
  // this.newUserCart = data;
  this.newUser.cartId = data._id;
  console.log('newUser: ', this.newUser);

  // console.log('newUser: ', this.newUser);





//   console.log('newUser: ', this.newUser);

// console.log('newUserCart: ', newUserCart);

this.restUserService.updateUser(this.newUser._id!, this.newUser).subscribe((data)=>{
  console.log('update User Data: ', data.cartId);

  })

})  


  window.alert('Пользователь и корзина созданы!');
      
    },(err: HttpErrorResponse) => {
      const serverError = err.error;                            
      console.log(serverError.errorText)
      // this.messageService.add({severity:'warn', summary:'Service Message', detail:serverError.errorText});
      console.log('auth false');
    })






    


  }

  closeRegModal(){
    const element = document.getElementById('registrationModal');
    // console.log(element);
    element?.removeAttribute("aria-modal");
    element?.removeAttribute("open");
  }
  
}

