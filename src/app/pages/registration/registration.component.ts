import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RestUserService } from '../../services/rest/user/rest-user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit, AfterViewInit, OnDestroy {
  regForm: FormGroup;

  constructor(private restUserService: RestUserService){}
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

    const userData = this.regForm.getRawValue();
    console.log('registration user data: ', userData)

    this.restUserService.registerUser(userData).subscribe((data)=>{
      console.log('registration User Data: ', data);
      
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

