import { Component } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  user : User ={

    "id" : 120,
    "name" :"user1",
    "email" : "user@gmail.com",
    "phonenumber" : 7890654321
    
  }
}
