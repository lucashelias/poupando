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
import { TipoContaCorrenteConsultaComponent } from './conta-bancaria/tipo-conta-corrente/tipo-conta-corrente-consulta/tipo-conta-corrente-consulta.component';
import { TipoContaCorrenteCadastroComponent } from './conta-bancaria/tipo-conta-corrente/tipo-conta-corrente-cadastro/tipo-conta-corrente-cadastro.component';
import { TipoContaCorrenteUpdateComponent } from './conta-bancaria/tipo-conta-corrente/tipo-conta-corrente-update/tipo-conta-corrente-update.component';
import { TipoContaCorrenteDeleteComponent } from './conta-bancaria/tipo-conta-corrente/tipo-conta-corrente-delete/tipo-conta-corrente-delete.component';
import { ContaCorrenteConsultaComponent } from './conta-bancaria/conta-corrente/conta-corrente-consulta/conta-corrente-consulta.component';
import { ContaCorrenteCadastroComponent } from './conta-bancaria/conta-corrente/conta-corrente-cadastro/conta-corrente-cadastro.component';
import { ContaCorrenteUpdateComponent } from './conta-bancaria/conta-corrente/conta-corrente-update/conta-corrente-update.component';
import { ContaCorrenteDeleteComponent } from './conta-bancaria/conta-corrente/conta-corrente-delete/conta-corrente-delete.component';
import { CategoriaInvestimentoConsultaComponent } from './investimentos/configuracoes/categoria/categoria-investimento-consulta/categoria-investimento-consulta.component';
import { CategoriaInvestimentoCadastroComponent } from './investimentos/configuracoes/categoria/categoria-investimento-cadastro/categoria-investimento-cadastro.component';
import { CategoriaInvestimentoUpdateComponent } from './investimentos/configuracoes/categoria/categoria-investimento-update/categoria-investimento-update.component';
import { CategoriaInvestimentoDeleteComponent } from './investimentos/configuracoes/categoria/categoria-investimento-delete/categoria-investimento-delete.component';
import { TipoInvestimentoConsultaComponent } from './investimentos/configuracoes/tipos_investimentos/tipo-investimento-consulta/tipo-investimento-consulta.component';
import { TipoInvestimentoCadastroComponent } from './investimentos/configuracoes/tipos_investimentos/tipo-investimento-cadastro/tipo-investimento-cadastro.component';
import { TipoInvestimentoUpdateComponent } from './investimentos/configuracoes/tipos_investimentos/tipo-investimento-update/tipo-investimento-update.component';
import { TipoInvestimentoDeleteComponent } from './investimentos/configuracoes/tipos_investimentos/tipo-investimento-delete/tipo-investimento-delete.component';

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
    {path: 'tipo-conta-corrente-consulta' , component: TipoContaCorrenteConsultaComponent},
    {path: 'tipo-conta-corrente-cadastro' , component: TipoContaCorrenteCadastroComponent},
    {path: 'tipo-conta-corrente-update/:id' , component: TipoContaCorrenteUpdateComponent},
    {path: 'tipo-conta-corrente-delete/:id' , component: TipoContaCorrenteDeleteComponent},
    {path: 'conta-corrente-consulta' , component: ContaCorrenteConsultaComponent},
    {path: 'conta-corrente-cadastro' , component: ContaCorrenteCadastroComponent},
    {path: 'conta-corrente-update/:id' , component: ContaCorrenteUpdateComponent},
    {path: 'conta-corrente-delete/:id' , component: ContaCorrenteDeleteComponent},
    {path: 'categoria-investimento-consulta' , component: CategoriaInvestimentoConsultaComponent},
    {path: 'categoria-investimento-cadastro' , component: CategoriaInvestimentoCadastroComponent},
    {path: 'categoria-investimento-update/:id' , component: CategoriaInvestimentoUpdateComponent},
    {path: 'categoria-investimento-delete/:id' , component: CategoriaInvestimentoDeleteComponent},
    {path: 'tipo-investimento-consulta' , component: TipoInvestimentoConsultaComponent},
    {path: 'tipo-investimento-cadastro' , component: TipoInvestimentoCadastroComponent},
    {path: 'tipo-investimento-update/:id' , component: TipoInvestimentoUpdateComponent},
    {path: 'tipo-investimento-delete/:id' , component: TipoInvestimentoDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
