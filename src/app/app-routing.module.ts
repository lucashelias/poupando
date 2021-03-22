import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioDetalheComponent } from './usuario/usuario-detalhe/usuario-detalhe.component';
import { HomeDetalheComponent } from './home/home-detalhe/home-detalhe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioDeleteComponent } from './usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './usuario/usuario-update/usuario-update.component';
import { BancoConsultaComponent } from './bancos/banco-consulta/banco-consulta.component';
import { BancoCadastroComponent } from './bancos/banco-cadastro/banco-cadastro.component';
import { BancoUpdateComponent } from './bancos/banco-update/banco-update.component';
import { BancoDeleteComponent } from './bancos/banco-delete/banco-delete.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'root' , component: AppComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'home' , component: HomeComponent},
    {path: 'home-detalhe' , component: HomeDetalheComponent},
    {path: 'usuario-cadastro' , component: UsuarioCadastroComponent},
    {path: 'usuario-detalhe' , component: UsuarioDetalheComponent},
    {path: 'usuario-update/:id' , component: UsuarioUpdateComponent},
    {path: 'usuario-delete/:id' , component: UsuarioDeleteComponent},
    {path: 'banco-consulta' , component: BancoConsultaComponent},
    {path: 'banco-cadastro' , component: BancoCadastroComponent},
    {path: 'banco-update/:id' , component: BancoUpdateComponent},
    {path: 'banco-delete/:id' , component: BancoDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
