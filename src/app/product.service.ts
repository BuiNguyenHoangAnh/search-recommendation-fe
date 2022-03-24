import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'http://0.0.0.0:5000/search';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAll(paramValue):Observable<Product[]>{
    let body = {search_term: paramValue}
    return this.httpClient.post<Product[]>(apiUrl, body).pipe()
  }
}