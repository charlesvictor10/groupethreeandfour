import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  api = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get(`${this.api}/liste`);
  }

  getOneCategorie(id: number) {
    return this.http.get(`${this.api}/categorieById/${id}`);
  }

  addCategories(categorie: any){
    return this.http.post(`${this.api}/add`,categorie);
  }

  updateCategories(id: number, categorie:any){
    return this.http.put(`${this.api}/update/${id}`, categorie);
  }

  deleteCategories(id:number){
    return this.http.delete(`${this.api}/delete/${id}`);
  }
}
