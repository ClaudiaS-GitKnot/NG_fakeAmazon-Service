import { Component, OnInit } from '@angular/core';
import { Articolo } from '../../models/articolo';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articolo-detail',
  templateUrl: './articolo-detail.component.html',
  styleUrl: './articolo-detail.component.css',
})
export class ArticoloDetailComponent implements OnInit {
  articolo?: Articolo;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('articoloId'));

    this.blogService
      .getArticoloById(id)
      .subscribe((dati) => (this.articolo = dati));
  }
}
