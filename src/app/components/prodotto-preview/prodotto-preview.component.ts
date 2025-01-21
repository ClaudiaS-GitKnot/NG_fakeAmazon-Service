import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prodotto } from '../../models/prodotto';

@Component({
  selector: 'app-prodotto-preview',
  templateUrl: './prodotto-preview.component.html',
  styleUrl: './prodotto-preview.component.css',
})
export class ProdottoPreviewComponent {
  @Input() prodotto?: Prodotto;

  @Output() onNonMiInteressa = new EventEmitter<Prodotto>();

  nonMiInteressa() {
    this.onNonMiInteressa.emit(this.prodotto);
  }
}
