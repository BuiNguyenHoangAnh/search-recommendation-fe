import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'http://127.0.0.1:8000/search';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAll(paramValue):Observable<Product[]>{
    let header = new HttpHeaders().set("search_term",paramValue)
    return this.httpClient.post<Product[]>(apiUrl, {headers: header}).pipe()
  }
}