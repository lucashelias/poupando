import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioDetalheComponent } from './cadastros/usuario-detalhe/usuario-detalhe.component';
import { UsuarioCadastroComponent } from './cadastros/usuario.cadastro/usuario.cadastro.component';
import { HomeDetalheComponent } from './home/home-detalhe/home-detalhe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'home' , component: HomeComponent},
    {path: 'home-detalhe' , component: HomeDetalheComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'usuario.cadastro' , component: UsuarioCadastroComponent},
    {path: 'usuario-detalhe' , component: UsuarioDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
