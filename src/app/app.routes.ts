import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { MainComponent } from './pages/main/main.component';
import { SetsComponent } from './pages/sets/sets.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {path: '', component: MainComponent, pathMatch: 'full'},
    {path: 'actions', component: ActionsComponent},
    {path: 'sets', component: SetsComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'product', component: ProductComponent},
    {path: 'cart', component: CartComponent},



    {path: '**', redirectTo: ''}
];
