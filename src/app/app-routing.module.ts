import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';

const routes: Routes = [

  { path: '', redirectTo: 'cuerpo', pathMatch: 'full' },
  { path: 'cuerpo', component: CuerpoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'usuario', component: UsuariosComponent },
    { path: '**', redirectTo: 'cuerpo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
