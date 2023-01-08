import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private categorieService: CategoriesService) {
      
     }

  categorieForm = this.fb.group({
    nom:['',Validators.required],
    description:['']
  })

  ngOnInit(): void {
  }

  onSubmit(){
    this.categorieService.addCategories(this.categorieForm.value)
    .subscribe((data:any)=>{})
  }
}
