import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth.service';

import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private auth:Auth, public router: Router, public http: Http){
    
  }

  ngOnInit() {
    
  }

  performLogin(){
   
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    
   
   this.auth.login(email,password);
  }

}
