import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MyErrorStateMatcher } from './../../../../helpers/errorStateMatcher';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public matcher = new MyErrorStateMatcher();
  constructor(
    private messageService: MessageService,
    private router: Router
   
  ) { }

  ngOnInit() {
    if ( localStorage.getItem('mlp_client_password') ) {
      this.router.navigate([`/main`]);
    }

    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onLoginHandler() {
    
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value
    localStorage.setItem('mlp_client_password', password);
    console.log();
    
    this.router.navigate([`/main`]);
  }

}
