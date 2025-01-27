import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { ProdottiService } from '../../services/prodotti.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodotto-detail',
  templateUrl: './prodotto-detail.component.html',
  styleUrl: './prodotto-detail.component.css',
})
export class ProdottoDetailComponent implements OnInit {
  prodotto?: Prodotto;

  constructor(private ps: ProdottiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.ps.getProdottoById(id).subscribe((dati) => (this.prodotto = dati));
  }
}
