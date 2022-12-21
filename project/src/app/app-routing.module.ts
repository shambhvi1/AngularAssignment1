import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductManageFormComponent } from './module/product-manage-form/product-manage-form.component';
import { ProductDetailsModule } from './features/product-details/product-details.module';
import { AppComponent } from './app.component';



const routes: Routes = [
  {
  path: 'navbar',
  loadChildren: () => import('./features/product-details').then(m => m.ProductDetailsModule)
  },
  { path: 'home', component: AppComponent },
  { path: 'products', component: ProductListComponent,},
  
  {path:'edit', component: ProductManageFormComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
