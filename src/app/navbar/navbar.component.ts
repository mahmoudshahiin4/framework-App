
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { hostname } from 'os';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  padding: string = '20px';   

  @HostListener('window:scroll', [])  
  onWindowScroll() {  
    const scrollY = window.scrollY;  

      
    if (scrollY > 100) {   
      this.padding = '10px';   
    } else {  
      this.padding = '20px'; 
    }  
  }  
}
