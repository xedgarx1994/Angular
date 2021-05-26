import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicesGenerosComponent } from './indices-generos.component';

describe('IndicesGenerosComponent', () => {
  let component: IndicesGenerosComponent;
  let fixture: ComponentFixture<IndicesGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicesGenerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicesGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
