import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/register/usuarios.component';
import { CabeceraComponent } from './pages/components/nav-bar/cabecera.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { ProductsModule } from './pages/products/module/product.module';
import { AdminProductComponent } from './pages/admin-product/admin-product.component';
import { EmpAddEditComponent } from './pages/emp-add-edit/emp-add-edit.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClientComponent } from './pages/client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpAddEditComponent,
    LoginComponent,
    UsuariosComponent,
    CabeceraComponent,
    FooterComponent,
    AdminProductComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ProductsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
