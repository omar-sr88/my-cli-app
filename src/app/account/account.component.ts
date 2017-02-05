import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  profile:any;
  
  constructor(private auth:Auth){
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }

  ngOnInit() {
  }

}
