import { Component, OnInit } from '@angular/core';
import { IAction } from '../../models/action';
import { Router } from '@angular/router';
import { ActionService } from '../../services/action/action.service';
import { CommonModule } from '@angular/common';
import { ActionCardComponent } from '../../components/action-card/action-card.component';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule, ActionCardComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent  implements OnInit{

  actions: IAction[] | [];
  limit: number = 0;


  constructor(
    private router: Router,
    private actionsService: ActionService
  ){}

  ngOnInit(): void {
    this.actionsService.getAllActions(this.limit).subscribe((data)=>{
      this.actions = data;
      
      console.log(this.actions);
    });
  }


  showMore(){

  }
}
