import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css',
})
export class ProdottiVetrinaComponent implements OnInit {
  prodotti: Prodotto[] = [];

  constructor(private prodottoService: ProdottiService) {}
  ngOnInit(): void {
    this.prodottoService.getProdotti().subscribe((dati) => {
      this.prodotti = dati;
    });
  }

  rimuoviProdotto(prodotto: Prodotto) {
    let i = this.prodotti.indexOf(prodotto);

    if (i > -1) {
      this.prodotti.splice(i, 1);
    }
  }
}
