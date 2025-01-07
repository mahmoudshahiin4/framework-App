
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userName: string = '';
  userAge: string = '';
  userEmail: string = '';
  userPassword: string = '';

  showUserNameMessage: boolean = false;
  showUserAgeMessage: boolean = false;
  showUserEmailMessage: boolean = false;
  showUserPasswordMessage: boolean = false;

  onInputChange(field: string, event: Event) {
    console.log('hello');
    
    const value = (event.target as HTMLInputElement).value;

    switch (field) {
      case 'userName':
        this.userName = value;
        this.showUserNameMessage = value.length > 0;
        break;
      case 'userAge':
        this.userAge = value;
        this.showUserAgeMessage = value.length > 0;
        break;
      case 'userEmail':
        this.userEmail = value;
        this.showUserEmailMessage = value.length > 0;
        break;
      case 'userPassword':
        this.userPassword = value;
        this.showUserPasswordMessage = value.length > 0;
        break;
      default:
        break;
    }
  }
}