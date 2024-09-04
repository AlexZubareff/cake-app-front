import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../components/admin-components/admin-header/admin-header.component';
import { AdminFooterComponent } from '../../components/admin-components/admin-footer/admin-footer.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
