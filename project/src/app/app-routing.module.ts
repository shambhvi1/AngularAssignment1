import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductManageFormComponent } from './module/product-manage-form/product-manage-form.component';
import { ProductDetailsModule } from './features/product-details/product-details.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';



const routes: Routes = [
  {
  path: 'product-details',
  loadChildren: () => import('./features/product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./features/product-list/product-list.module').then(m => m.ProductListModule)
  },
  { path: 'home', component: AppComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path:'edit', component: ProductManageFormComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
