import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  form: any = {
    prenom:null,
    nom:null,
    email:null,
    password:null
  };
  isRegister = false;
  isRegisterFaled = false;
  errorMessage = "";

  constructor(private authService: AuthService) {   }

  ngOnInit(): void {
  }

  onSubmit(){
    const {nom,prenom,email,password} = this.form;
    this.authService.inscription(nom,prenom,email,password)
    .subscribe({
      next: data =>{
        console.log(data);
        this.isRegister = true;
        this.isRegisterFaled = false;
      },
      error: err =>{
        this.errorMessage = err.error.message;
        this.isRegisterFaled = false;
      }
    });
  }

}
