import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/register/usuarios.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { ProductsModule } from './pages/products/module/product.module';
import { EmpAddEditComponent } from './pages/emp-add-edit/emp-add-edit.component';
import { AppComponent } from './app.component';
import { ClientComponent } from './pages/client/client.component';
import { RouterModule } from '@angular/router';

import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { DetalleOrdenComponent } from './pages/detalle-orden/detalle-orden.component';

import { SolicitudesService } from './pages/solicitud/service/solicitudes.service';
// import { ProductoService } from './pages/productos/service/producto.service';
import { AdminProductComponent } from './pages/admin-product/admin-product.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { CabeceraComponent } from './pages/components/nav-bar/cabecera.component';
import { SupplierFormComponent } from './pages/supplier-form/supplier-form.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { EditInventoryComponent } from './pages/edit-inventory/edit-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpAddEditComponent,
    LoginComponent,
    UsuariosComponent,
    FooterComponent,
    ClientComponent,
    SolicitudComponent,
    OrdenesComponent,
    DetalleOrdenComponent,
    AdminProductComponent,
    CabeceraComponent,
    SuppliersComponent,
    SupplierFormComponent,
    InventoryComponent,
    EditInventoryComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ProductsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    SolicitudesService,
    // ProductoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
