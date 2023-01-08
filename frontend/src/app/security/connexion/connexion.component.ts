import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  form: any = {
    email:null,
    password:null
  };
  isLogin = false;
  isLoginFaled = false;
  errorMessage = "";
  roles: string[]  = [];

  constructor(private authService: AuthService, private storageService: StorageService) {   }

  ngOnInit(): void {
    if (this.storageService.isLogin()) {
      this.isLogin = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(){
    const {email,password} = this.form;
    this.authService.connexion(email,password).subscribe({
      next: data =>{
        this.storageService.saveUser(data);
        this.isLoginFaled = false;
        this.isLogin = true;
        this.roles = this.storageService.getUser().roles;
      },
      error: err =>{
        this.errorMessage = err.error.message;
        this.isLoginFaled = true;
      }
    });
  }

  reloadPage(){
    window.location.reload();
  }

}
