import { Component, OnInit } from '@angular/core';
import { Articolo } from '../../models/articolo';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-articoli-list',
  templateUrl: './articoli-list.component.html',
  styleUrl: './articoli-list.component.css',
})
export class ArticoliListComponent implements OnInit {
  articoli: Articolo[] = [];

  constructor(private blogService: BlogService) {}
  ngOnInit(): void {
    this.blogService.getArticoli().subscribe((dati) => (this.articoli = dati));
  }
}
