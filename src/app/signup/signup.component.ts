import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth.service';

import { Router } from '@angular/router';
import { Http , Headers , Response } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  resp:any;

  constructor(private auth:Auth, public router: Router, public http: Http){
    
  }

  ngOnInit() {
  }

  performSignup(){
   
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
     
   
    //this.auth.signup(email,password);


    var headers = new Headers({
    'X-Requested-With': 'XMLHttpRequest',
    'withCredentials' : 'true'
  });

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin' , '*');
    
    this.http.post('http://mimo-test.auth0.com/dbconnections/signup', 
                          JSON.stringify({
                            client_id:'PAn11swGbMAVXVDbSCpnITx5Utsxz1co',
                            email:email, 
                            password: password,
                            connection: 'Username-Password-Authentication'}),
                          {headers:headers})
    .subscribe(
      data => this.resp = data,
      err => alert(err),
      () => console.log(this.resp)
    );

  }

}
