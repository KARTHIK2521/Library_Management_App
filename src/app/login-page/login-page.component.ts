import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  constructor(private builder: FormBuilder,private router:Router){
      sessionStorage.clear();
}

  loginForm=this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  })

  proceedLogin(){
    if(this.loginForm.valid){
       if(this.loginForm.value.username==='digitallibrary' && this.loginForm.value.password==='invensoft@123'){
          sessionStorage.setItem('username',this.loginForm.value.username);
          sessionStorage.setItem('password',this.loginForm.value.password);
           this.router.navigate(['/dashboard']);
       }
       else{
          alert("Invalid Credentials")
       }

    }
    else{
      alert("Invalid Credentials");

    }
    this.loginForm.reset();
  }



}
