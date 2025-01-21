import { Component } from '@angular/core';
import { Rating } from './models/prodotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NG_amazon';

  ratingTrustPilot: Rating = {
    count: 799,
    rate: 4.9,
  };
}
