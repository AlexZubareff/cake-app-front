import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RestUserService } from '../../services/rest/user/rest-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit, AfterViewInit, OnDestroy {
  authForm: FormGroup;

  constructor(
    private restUserService: RestUserService, 
    private router: Router,
    private userService: UserService
  ){}
  ngOnInit(): void {
    
        // init formGroup
        this.authForm = new FormGroup({
          login: new FormControl('', [Validators.required,Validators.minLength(3)]),
          password: new FormControl('', [Validators.required, Validators.minLength(2)]),
  
    
        });
  }
  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }

  onSubmit(){
    const userData = this.authForm.getRawValue();
    console.log('auth user data: ', userData)

    this.restUserService.authUser(userData, userData.login).subscribe((data) => {
      console.log('auth User Data: ', data);
      // authUser.id = data.id;
      this.userService.setUser(data);
      const token: string = data.access_token;
      this.userService.setToken(token);

      this.router.navigate(['']);
      // console.log('auth true');
    }
    ,(err: HttpErrorResponse) => {
      const serverError = err.error;
      console.log(serverError.errorText)
      // this.messageService.add({severity:'warn', summary:'Service Message', detail:serverError.errorText});
      console.log('auth false');
    })
  }
}