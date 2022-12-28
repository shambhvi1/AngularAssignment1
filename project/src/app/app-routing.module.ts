import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';




const routes: Routes = [
  {
  path: 'products/:id',
  loadChildren: () => import('./features/product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/product-list/product-list.module').then(m => m.ProductListModule)
  },
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
