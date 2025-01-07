import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
    
  imageSource = '';
  isOpen = false;

  open(source: string) {
    this.imageSource = source;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  } 

}
