import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { MainComponent } from './pages/main/main.component';
import { PopularComponent } from './pages/popular/popular.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
    {path: '', component: MainComponent, pathMatch: 'full'},
    {path: 'actions', component: ActionsComponent},
    {path: 'popular', component: PopularComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'registration', component: RegistrationComponent},


    {path: '**', redirectTo: ''}
];
