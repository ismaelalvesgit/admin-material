import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cep } from '../models/cep.model';
import { Observable } from 'rxjs';

//@Author Ismael Alves
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  baseUrl:string = "https://viacep.com.br/ws/"

  constructor(
    private http:HttpClient
  ) { }

  getCep(cep:string):Observable<Cep>{
    return this.http.get<Cep>(this.baseUrl+`${cep}/json/`)
  }

  // metodo que pega rota ativa obs temporaria
  static getRouter(): string {
    return localStorage.getItem("router");
  }

  // metodo que seta a rota ativa obs temporaria
  static setRouter(router:string){
    localStorage.setItem("router", router)
  }
}
