import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogConfirmation, UsuarioCadastroComponent } from './usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioDetalheComponent } from './usuario/usuario-detalhe/usuario-detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeDetalheComponent } from './home/home-detalhe/home-detalhe.component';
import { authInterceptorProviders } from './_services/auth.interceptor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabelaComponentComponent } from './componente_shared/tabela-component/tabela-component.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SidenavComponent } from './componente_shared/sidenav/sidenav.component';
import { MenuComponent } from './componente_shared/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartsModule } from 'ng2-charts';
import { ContaBancariaComponent } from './dashboards/simples/conta-bancaria/conta-bancaria.component';
import { InvestimentosComponent } from './dashboards/simples/investimentos/investimentos.component';
import { BolsaDeValoresComponent } from './dashboards/simples/bolsa-de-valores/bolsa-de-valores.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UsuarioDeleteComponent } from './usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './usuario/usuario-update/usuario-update.component';
import { BancoConsultaComponent } from './bancos/banco-consulta/banco-consulta.component';
import { BancoCadastroComponent } from './bancos/banco-cadastro/banco-cadastro.component';
import { BancoUpdateComponent } from './bancos/banco-update/banco-update.component';
import { BancoDeleteComponent } from './bancos/banco-delete/banco-delete.component';
import { ContaCorrenteConsultaComponent } from './conta-bancaria/conta-corrente/conta-corrente-consulta/conta-corrente-consulta.component';
import { ContaCorrenteUpdateComponent } from './conta-bancaria/conta-corrente/conta-corrente-update/conta-corrente-update.component';
import { ContaCorrenteDeleteComponent } from './conta-bancaria/conta-corrente/conta-corrente-delete/conta-corrente-delete.component';
import { ContaCorrenteCadastroComponent } from './conta-bancaria/conta-corrente/conta-corrente-cadastro/conta-corrente-cadastro.component';
import { TipoInvestimentoCadastroComponent } from './investimentos/configuracoes/tipos_investimentos/tipo-investimento-cadastro/tipo-investimento-cadastro.component';
import { TipoInvestimentoConsultaComponent } from './investimentos/configuracoes/tipos_investimentos/tipo-investimento-consulta/tipo-investimento-consulta.component';
import { TipoInvestimentoUpdateComponent } from './investimentos/configuracoes/tipos_investimentos/tipo-investimento-update/tipo-investimento-update.component';
import { TipoInvestimentoDeleteComponent } from './investimentos/configuracoes/tipos_investimentos/tipo-investimento-delete/tipo-investimento-delete.component';
import { CategoriaInvestimentoDeleteComponent } from './investimentos/configuracoes/categoria/categoria-investimento-delete/categoria-investimento-delete.component';
import { CategoriaInvestimentoUpdateComponent } from './investimentos/configuracoes/categoria/categoria-investimento-update/categoria-investimento-update.component';
import { CategoriaInvestimentoConsultaComponent } from './investimentos/configuracoes/categoria/categoria-investimento-consulta/categoria-investimento-consulta.component';
import { CategoriaInvestimentoCadastroComponent } from './investimentos/configuracoes/categoria/categoria-investimento-cadastro/categoria-investimento-cadastro.component';
import { TipoContaCorrenteConsultaComponent } from './conta-bancaria/tipo-conta-corrente/tipo-conta-corrente-consulta/tipo-conta-corrente-consulta.component';
import { TipoContaCorrenteUpdateComponent } from './conta-bancaria/tipo-conta-corrente/tipo-conta-corrente-update/tipo-conta-corrente-update.component';
import { TipoContaCorrenteCadastroComponent } from './conta-bancaria/tipo-conta-corrente/tipo-conta-corrente-cadastro/tipo-conta-corrente-cadastro.component';
import { TipoContaCorrenteDeleteComponent } from './conta-bancaria/tipo-conta-corrente/tipo-conta-corrente-delete/tipo-conta-corrente-delete.component';


@NgModule({ 
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent, 
    UsuarioDetalheComponent,  
    UsuarioCadastroComponent, 
    HomeDetalheComponent,  
    TabelaComponentComponent,
    SidenavComponent,
    MenuComponent,
    ContaBancariaComponent,
    InvestimentosComponent, 
    BolsaDeValoresComponent,
    DialogConfirmation,
    UsuarioDeleteComponent,
    UsuarioUpdateComponent,
    BancoConsultaComponent,
    BancoCadastroComponent,
    BancoUpdateComponent,
    BancoDeleteComponent,
    ContaCorrenteConsultaComponent,
    ContaCorrenteUpdateComponent,
    ContaCorrenteDeleteComponent,
    ContaCorrenteCadastroComponent,
    TipoInvestimentoCadastroComponent,
    TipoInvestimentoConsultaComponent,
    TipoInvestimentoUpdateComponent,
    TipoInvestimentoDeleteComponent,
    CategoriaInvestimentoDeleteComponent,
    CategoriaInvestimentoUpdateComponent,
    CategoriaInvestimentoConsultaComponent,
    CategoriaInvestimentoCadastroComponent,
    TipoContaCorrenteConsultaComponent,
    TipoContaCorrenteUpdateComponent,
    TipoContaCorrenteCadastroComponent,
    TipoContaCorrenteDeleteComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    MatExpansionModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    ChartsModule,
    MatDialogModule,
    MatSnackBarModule

 
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    ChartsModule,

  ],

  providers: [authInterceptorProviders, 
              { provide: LOCALE_ID, useValue: 'pt-BR' },
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
