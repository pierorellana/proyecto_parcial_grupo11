import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/register/usuarios.component';
import { CabeceraComponent } from './pages/components/nav-bar/cabecera.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { ProductsModule } from './pages/products/module/product.module';
import { EmpAddEditComponent } from './pages/emp-add-edit/emp-add-edit.component';
import { ClientComponent } from './pages/client/client.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpAddEditComponent,
    LoginComponent,
    UsuariosComponent,
    CabeceraComponent,
    FooterComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ProductsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
