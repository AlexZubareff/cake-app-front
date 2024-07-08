import { Component, Input } from '@angular/core';
import { IAction } from '../../models/action';

@Component({
  selector: 'app-action-card',
  standalone: true,
  imports: [],
  templateUrl: './action-card.component.html',
  styleUrl: './action-card.component.css'
})
export class ActionCardComponent {
  @Input() action: IAction;


  constructor(
    
) {}
}
