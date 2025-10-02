import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAddPageComponent } from './author-add-page.component';

describe('AuthorAddPageComponent', () => {
  let component: AuthorAddPageComponent;
  let fixture: ComponentFixture<AuthorAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorAddPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
