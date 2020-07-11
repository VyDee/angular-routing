import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent},
            { 
                path: 'products',
                canLoad: [AuthGuard],
                loadChildren: () => 
                    import('./products/product.module').then(m => m.ProductModule)},
            { path: '', redirectTo: 'welcome', pathMatch: 'full'},
            { path: '**', component: PageNotFoundComponent }
          ]),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}