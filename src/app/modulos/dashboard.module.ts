import { DashboardComponent } from './../componentes/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosService } from '../services/dados.service';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DadosService
  ]
})
export class DashboardModule { }
