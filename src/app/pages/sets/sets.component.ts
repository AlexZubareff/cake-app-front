import { Component } from '@angular/core';
import { SetCardComponent } from '../../components/set-card/set-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sets',
  standalone: true,
  imports: [SetCardComponent],
  templateUrl: './sets.component.html',
  styleUrl: './sets.component.css'
})
export class SetsComponent {

  constructor(private router: Router){}

  showMore(){
    this.router.navigate(['/']);
  }
}
