import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListComponent } from './categories-list.component';

describe('CategoriesList', () => {
  let component: CategoriesListComponent;
  let fixture: ComponentFixture<CategoriesListComponent>;

  beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [CategoriesListComponent], // ✅ fix
  }).compileComponents();

  fixture = TestBed.createComponent(CategoriesListComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
