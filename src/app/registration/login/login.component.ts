import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 
  constructor(private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {}

  loginForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  submit(){
    if(this.loginForm.valid){
      this.auth.emailLogin(this.loginForm.value.email, this.loginForm.value.password)
        .then(()=>{
          this.route.navigate(['/home/Home']);
          this.loginForm.reset();
          // alert("Signed In");
        })
        .catch((error) => alert("Enter Correct Sign In"))
    }else{
      alert("Invalid Login Credentials") 
      // if(this.loginForm.value.email == 0 && this.loginForm.value.password==0){
      //   alert("Enter login Details")
      // }else{
      //   alert("Enter Correct Details")
      // }
    }
    this.loginForm.reset();
  }

  googleSignup(){
    this.auth.googleLogin()
  }
}
