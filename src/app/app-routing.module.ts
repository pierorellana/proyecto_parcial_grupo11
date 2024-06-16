import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/register/usuarios.component';
import { ProductsComponent } from './pages/products/products.component';
import { ComputadorasComponent } from './pages/products/components/computadoras/computadoras.component';
import { CelularesComponent } from './pages/products/components/celulares/celulares.component';
import { AccesoriosComponent } from './pages/products/components/accesorios/accesorios.component';
import { AdminProductComponent } from './pages/admin-product/admin-product.component';
import { ClientComponent } from './pages/client/client.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { DetalleOrdenComponent } from './pages/detalle-orden/detalle-orden.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UsuariosComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'client', component: ClientComponent },
  { path: 'products/computer', component: ComputadorasComponent },
  { path: 'products/phones', component: CelularesComponent },
  { path: 'products/accesories', component: AccesoriosComponent },
  { path: 'adminProduct', component: AdminProductComponent },
  { path: 'solicitud', component: SolicitudComponent },
  // { path: 'productos/:id', component: ProductosComponent },
  { path: 'orden/:id', component: DetalleOrdenComponent },
  { path: 'detalle-orden', component: DetalleOrdenComponent },
  { path: 'solicitud/:valor', component: SolicitudComponent },
  { path: 'ordenes', component: OrdenesComponent },
  { path: 'proveedor', component: SuppliersComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

