import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  connexion(email: string, password:string){
    return this.http.post(`${this.api}/auth/connexion`,{email,password});
  }

  inscription(nom: string, prenom: string, email: string, password: string){
    return this.http.post(`${this.api}/auth/inscription`,{prenom,nom,email,password});
  }

  deconnexion(){
    return this.http.post(`${this.api}/auth/deconnexion`,{});
  }
}
