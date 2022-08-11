import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    VendasRoutingModule,
    MatToolbarModule
  ]
})
export class VendasModule { }
