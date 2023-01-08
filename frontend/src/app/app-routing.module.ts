import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { UpdateCategorieComponent } from './categories/update-categorie/update-categorie.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './security/connexion/connexion.component';
import { InscriptionComponent } from './security/inscription/inscription.component';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"categories",component: CategoriesComponent},
  {path:"updateCategorie/:id",component: UpdateCategorieComponent},
  {path:"connexion",component: ConnexionComponent},
  {path:"inscription",component: InscriptionComponent},
  {path:"**",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
