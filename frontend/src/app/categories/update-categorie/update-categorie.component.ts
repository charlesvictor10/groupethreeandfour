import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  

  constructor(private route: ActivatedRoute,
     private categorieService: CategoriesService,
      private fb:FormBuilder,
      private router:Router) { 
    
  }

  categorieForm = this.fb.group({
    nom:[''],
    description:['']
  });

  idCategorie: any;

  ngOnInit(): void {
    this.idCategorie = this.route.snapshot.params['id'];
    this.categorieService.getOneCategorie(this.idCategorie)
      .subscribe((data:any) =>{
        this.categorieForm.controls['nom'].setValue(data.nom);
        this.categorieForm.controls['description'].setValue(data.description);
      })
  }

  onSubmit(){
    this.categorieService.updateCategories(this.idCategorie,this.categorieForm.value)
    .subscribe((data:any)=>{
      alert('categorie bien modifier');
      this.router.navigateByUrl('/categories');
    })
  }

  onReset(){
    this.router.navigateByUrl('/categories');
  }

}
