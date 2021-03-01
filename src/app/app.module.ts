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
