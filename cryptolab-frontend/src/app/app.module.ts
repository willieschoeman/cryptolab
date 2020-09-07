import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { ApiService } from './services/api.service';
import { LoadingComponent } from './loading/loading.component';
import { SearchPipe } from './pipes/search.pipe';
import { CryptoService } from './services/crypto.service';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    SearchPipe,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SocketIoModule.forRoot(config),
    FontAwesomeModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    ApiService,
    CryptoService,
    SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
