import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardsViagensComponent } from './components/cards-viagens/cards-viagens.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardUserViagensComponent } from './components/card-user-viagens/card-user-viagens.component';
import { ModalViagemComponent } from './components/modal-viagem/modal-viagem.component';
import { ModalUserVoosComponent } from './components/modal-user-voos/modal-user-voos.component';
import { HttpRequesInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FilterComponent,
    CardsViagensComponent,
    CardUserViagensComponent,
    ModalViagemComponent,
    ModalUserVoosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequesInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
