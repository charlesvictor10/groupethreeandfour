import {OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie';
import { CategoriesService } from '../service/categories.service';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements AfterViewInit,OnInit{

  displayedColumns: string[] = ['numero', 'nom', 'description', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private categorieService: CategoriesService,
    private dialog: MatDialog,
    private route: Router) { 
    this.listeCategorie();
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  listeCategorie(){
    this.categorieService.getAllCategories()
    .subscribe((data: any)=>{
      this.dataSource=data;
      this.dataSource = new MatTableDataSource(data);
    })
  }

  openDialogAddCategorie(){
    const result = this.dialog.open(AddCategorieComponent);
    result.afterClosed().subscribe(data=>{
      this.listeCategorie();
    })
    }

    onDelete(row:any){
      this.categorieService.deleteCategories(row.id)
      .subscribe((data:any)=>{
        if(data==null){
          this.listeCategorie();
        }
      })
    }

    onUpdate(row: Categorie){
      this.route.navigateByUrl("/updateCategorie/"+row.id);
    }
}
