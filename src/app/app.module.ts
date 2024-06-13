import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

// Importa los componentes de la aplicación
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { DetalleOrdenComponent } from './pages/detalle-orden/detalle-orden.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';


// Importa los servicios de la aplicación
import { SolicitudesService } from './pages/solicitud/service/solicitudes.service';
import { ProductoService } from './pages/productos/service/producto.service';



@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    OrdenesComponent,
    DetalleOrdenComponent,
    ProductosComponent,
    CabeceraComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, HttpClientModule, 
    ReactiveFormsModule, RouterModule
  ],
  providers: [
    SolicitudesService,
    ProductoService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
