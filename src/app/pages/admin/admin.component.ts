import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AdminHeaderComponent } from '../../components/admin-components/admin-header/admin-header.component';
import { AdminFooterComponent } from '../../components/admin-components/admin-footer/admin-footer.component';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/users';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    AdminHeaderComponent,
    AdminFooterComponent,
    ProductsComponent,
    UsersComponent,
    AddUserComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit, OnDestroy, OnChanges {

  
  constructor(private router: Router) {}

  ngOnInit(): void {
    //Добавляет текущий URL в LocalStoradge
    window.localStorage.setItem('current-url', this.router.url);
  }
  ngOnDestroy(): void {}
  ngOnChanges(changes: SimpleChanges): void {}

  // reloadCurrentPage() {

  //   this.router.navigateByUrl(localStorage.getItem('current-url')!);;
  //  }
}
