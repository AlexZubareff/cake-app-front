import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { MainComponent } from './pages/main/main.component';
import { CommonModule } from '@angular/common';
// import { RestInterceptorsService } from './services/rest/interceptors/rest-interceptors.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './pages/auth/auth.component';
import { AdminComponent } from './pages/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    ActionsComponent,
    MainComponent,
    AuthComponent,
    AdminComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cake-app';
}
