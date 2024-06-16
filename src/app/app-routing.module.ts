import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/register/usuarios.component';
import { ProductsComponent } from './pages/products/products.component';
import { ComputadorasComponent } from './pages/products/components/computadoras/computadoras.component';
import { CelularesComponent } from './pages/products/components/celulares/celulares.component';
import { AccesoriosComponent } from './pages/products/components/accesorios/accesorios.component';
import { ClientComponent } from './pages/client/client.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UsuariosComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'client', component: ClientComponent },
  { path: 'products/computer', component: ComputadorasComponent },
  { path: 'products/phones', component: CelularesComponent },
  { path: 'products/accesories', component: AccesoriosComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
