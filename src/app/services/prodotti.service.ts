import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  constructor(private http: HttpClient) {}

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>('https://fakestoreapi.com/products');
  }

  getCategorie(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }

  getProdottoById(id: number): Observable<Prodotto> {
    return this.http.get<Prodotto>('https://fakestoreapi.com/products/' + id);
  }

  getProdottiByCategory(categoria: string): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(
      'https://fakestoreapi.com/products/category/' + categoria
    );
  }
}
