import { Venda } from '../vendas/model/venda';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  //status: string[] = ['RECEBIDO', 'ENTREGUE', 'DELETADO'];
  API = environment.apiUrl;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getVendas(){
    return this.http.get<Venda[]>( this.API + "/listAll").pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    return throwError(error.message || "Erro ao buscar produtos")
  }

  loadById(id: any) {
    return this.http.get<Venda>(`${this.API}/${id}`).pipe(take(1));
  }

  postVenda(venda: Venda){
    return this.http.post<Venda>(this.API, venda, this.httpOptions).pipe(take(1));;
  }

  updateVenda(venda: Venda){
    return this.http.put<Venda>(`${this.API}/${venda._id}`, venda).pipe(take(1));;
  }

  removeVenda(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
