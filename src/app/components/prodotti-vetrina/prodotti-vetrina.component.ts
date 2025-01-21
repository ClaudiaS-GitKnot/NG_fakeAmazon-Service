import { Component, Input } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { PRODOTTI } from '../../data/prodotti';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css',
})
export class ProdottiVetrinaComponent {
  prodotti: Prodotto[] = PRODOTTI;

  rimuoviProdotto(prodotto: Prodotto) {
    let i = this.prodotti.indexOf(prodotto);

    if (i > -1) {
      this.prodotti.splice(i, 1);
    }
  }
}
