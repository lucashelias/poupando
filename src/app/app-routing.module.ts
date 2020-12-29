import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioDetalheComponent } from './cadastros/usuario-detalhe/usuario-detalhe.component';
import { UsuarioCadastroComponent } from './cadastros/usuario.cadastro/usuario.cadastro.component';
import { HomeDetalheComponent } from './home/home-detalhe/home-detalhe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login' , component: LoginComponent},
    {path: 'home' , component: HomeComponent,
    children:[
      {path: 'usuario-detalhe' , component: UsuarioDetalheComponent},
      {path: 'usuario.cadastro' , component: UsuarioCadastroComponent},
      {path: 'home-detalhe' , component: HomeDetalheComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
