import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioDetalheComponent } from './cadastros/usuario-detalhe/usuario-detalhe.component';
import { UsuarioComponent } from './cadastros/usuario/usuario.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'usuario' , component: UsuarioComponent},
  {path: 'usuario-detalhe' , component: UsuarioDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  
  exports: [RouterModule]
})

export class AppRoutingModule { }
