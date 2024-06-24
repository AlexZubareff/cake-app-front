import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ActionCardComponent } from '../../components/action-card/action-card.component';
import { SetCardComponent } from '../../components/set-card/set-card.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet, 
    FooterComponent, 
    HeaderComponent, 
    ActionCardComponent,
    SetCardComponent,
    ProductComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private router: Router){}

  goToSetsPage(){
    this.router.navigate(['sets']);
  }
}
