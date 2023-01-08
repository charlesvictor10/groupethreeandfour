import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLogin = false;
  showMenu = false;
  roles: string[] = [];
  email?: string;

  constructor(private router: Router,
    private authService: AuthService,
     private storageService: StorageService) { }

  goHome(){
    this.router.navigateByUrl("/home")
  }

  ngOnInit(): void {
    this.isLogin = this.storageService.isLogin();
    if (this.isLogin) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showMenu = this.roles.includes('ROLE_USER');
      this.email = user.email;
    }

  }

  logOut(){
    this.authService.deconnexion().subscribe({
      next: data =>{
        this.storageService.clean();
        window.location.reload();
      },
      error: err =>{
        
      }
    })
  }

}
