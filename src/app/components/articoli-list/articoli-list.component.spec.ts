import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoliListComponent } from './articoli-list.component';

describe('ArticoliListComponent', () => {
  let component: ArticoliListComponent;
  let fixture: ComponentFixture<ArticoliListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticoliListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticoliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
