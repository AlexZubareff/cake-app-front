import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { MainComponent } from './pages/main/main.component';
import { SetsComponent } from './pages/sets/sets.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { MacaronsComponent } from './pages/macarons/macarons.component';
import { AdminComponent } from './pages/admin/admin.component';
import { adminRouteGuard } from './guards/admin-route/admin-route.guard';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { EditUserComponent } from './pages/admin/edit-user/edit-user.component';
import { UserListItemComponent } from './components/admin-components/user-list-item/user-list-item.component';
import { ProductListItemComponent } from './components/admin-components/product-list-item/product-list-item.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';

export const routes: Routes = [
    // {path: '', component: MainComponent, pathMatch: 'full'},
    // {path: 'actions', component: ActionsComponent},
    // {path: 'sets', component: SetsComponent},
    // {path: 'auth', component: AuthComponent},
    // {path: 'registration', component: RegistrationComponent},
    // {path: 'product', component: ProductComponent},
    // {path: 'cart', component: CartComponent},
    // {
    //     path: 'admin', 
    //     component: AdminComponent, 
    //     canActivate: [adminRouteGuard]},
    
    // {
    //     path: 'catalog',
    //     component: CatalogComponent,
    //     pathMatch: 'full',
    //     children:[
    //         {
    //             path:'product',
    //             component: ProductComponent
    //         }
    //     ]
    // },
    // {path: 'macarons', component: MacaronsComponent},


    {path: '', redirectTo: 'shop', pathMatch: 'full' },
    {path: 'shop', 
        component: ShopComponent,
        // redirectTo: 'shop/main', pathMatch: 'full',
        children:[
            // {path: '', component: ShopComponent},

            {path: '', component: MainComponent},

            // {path: '', component: MainComponent},
            {path: 'product', component: ProductComponent},
            {path: 'actions', component: ActionsComponent},
            {path: 'sets', component: SetsComponent},
            {path: 'product', component: ProductComponent},
            {path: 'cart', component: CartComponent},
            {path: 'macarons', component: MacaronsComponent},
            {path: 'catalog', component: CatalogComponent}
        ]
    },
    {path: 'auth', component: AuthComponent},
    {path: 'registration', component: RegistrationComponent},
 
    {
        path: 'admin', 
        component: AdminComponent, 
        canActivate: [adminRouteGuard],
        children:[

            {path: '', 
                redirectTo: 'products', pathMatch: 'full',
                },
            {path: 'products', 
                component: ProductsComponent,
                children:[
                    {path: '', component: ProductListItemComponent},
                    {path: 'create', component: AddProductComponent},
                    {path: 'edit', component: EditProductComponent},
                ]
            },
            {path: 'users', 
                component: UsersComponent,
                children:[
                    {path: '', component: UserListItemComponent},
                    {path: 'create', component: AddUserComponent},
                    {path: 'edit', component: EditUserComponent},
                ]
            },

        ]
    },
    
    



    {path: '**', redirectTo: ''}
];
