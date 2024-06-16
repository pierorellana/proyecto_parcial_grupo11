import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products.component';
import { ComputadorasComponent } from '../components/computadoras/computadoras.component';
import { CelularesComponent } from '../components/celulares/celulares.component';
import { AccesoriosComponent } from '../components/accesorios/accesorios.component';


const routes: Routes = [
    {
        path: 'products', component: ProductsComponent,
        children: [
            { path: 'computadoras', component: ComputadorasComponent },
            { path: 'telefonos', component: CelularesComponent },
            { path: 'accesorios', component: AccesoriosComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
