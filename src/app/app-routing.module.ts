import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { DetalleOrdenComponent } from './pages/detalle-orden/detalle-orden.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'productos/:id', component: ProductosComponent },
  { path: 'orden/:id', component: DetalleOrdenComponent },
  { path: 'detalle-orden', component: DetalleOrdenComponent },
  { path: 'solicitud/:valor', component: SolicitudComponent },
  { path: 'ordenes', component: OrdenesComponent },
  { path: '**', redirectTo: '/productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

