import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { PaginanoencontradaComponent } from './pages/paginanoencontrada/paginanoencontrada.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: PaginanoencontradaComponent },
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
