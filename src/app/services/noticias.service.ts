import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticiaResult } from '../interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { 

  }

  getNoticias() {
    return this.http.get<NoticiaResult>("https://newsapi.org/v2/top-headlines?country=ca&apiKey=dffd9e5ab49a4c89bea00dbf6a0100be");
  }
}
