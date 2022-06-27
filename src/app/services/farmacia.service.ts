import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FarmaciaActualizar } from '../../models/farmacia';
import { FarmaciaTraer } from '../../models/farmaciaTraer';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {
    url_api = 'http://localhost:4000/api';
    constructor( private http: HttpClient) {}

    getfarmacias(): Observable<any>{
        return this.http.get(`${this.url_api}/obtener-productos`)
    }


    putContacto(FarmaciaActualizar: FarmaciaActualizar): Observable<any>{
        return this.http.put(`${this.url_api}/actualizar-producto`, FarmaciaActualizar)
    }

}

