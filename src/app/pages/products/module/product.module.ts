import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputadorasComponent } from '../components/computadoras/computadoras.component';
import { AccesoriosComponent } from '../components/accesorios/accesorios.component';
import { ProductsComponent } from '../products.component';
import { CelularesComponent } from '../components/celulares/celulares.component';
import { ProductsRoutingModule } from './product-routing.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ComputadorasComponent,
    CelularesComponent,
    AccesoriosComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
