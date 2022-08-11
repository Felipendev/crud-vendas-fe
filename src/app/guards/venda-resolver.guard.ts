import { Venda } from '../vendas/model/venda';


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { VendaService } from '../service/venda.service';


@Injectable({
  providedIn: 'root'
})
export class VendaResolverGuard implements Resolve<Venda> {

  constructor(
    private service: VendaService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    if(route.params && route.params['_id']) {
     return this.service.loadById(route.params['_id']);
    }

    return of({
      _id: null,
    });
  }


}
