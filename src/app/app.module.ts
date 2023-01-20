import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginanoencontradaComponent } from './pages/paginanoencontrada/paginanoencontrada.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { LoginComponent } from './pages/login/login.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasComponent } from './pages/noticias/noticias.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginanoencontradaComponent,
    AcercaComponent,
    LoginComponent,
    IngresarComponent,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
