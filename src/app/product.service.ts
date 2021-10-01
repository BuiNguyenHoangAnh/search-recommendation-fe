import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {Product} from '../model/product.model';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'http://127.0.0.1:8000/api/search';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAll(paramValue):Observable<Product[]>{
    let param = new HttpParams().set("key",paramValue)
    return this.httpClient.get<Product[]>(apiUrl, {params: param}).pipe()
  }
}