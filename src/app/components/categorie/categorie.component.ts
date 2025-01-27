import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css',
})
export class CategorieComponent implements OnInit {
  categorie: string[] = [];

  constructor(private ps: ProdottiService) {}
  ngOnInit(): void {
    this.ps.getCategorie().subscribe((dati) => {
      this.categorie = dati;
    });
  }
}
