import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 334],
    ['Fevereiro', 313],
    ['Marco', 323],
    ['Abril', 343],
    ['Maio', 393],
    ['Junho', 333],
  ]

  constructor() { }
  
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })
  }
}
