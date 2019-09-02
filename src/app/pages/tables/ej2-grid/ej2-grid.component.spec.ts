import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2GridComponent } from './ej2-grid.component';

describe('Ej2GridComponent', () => {
  let component: Ej2GridComponent;
  let fixture: ComponentFixture<Ej2GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Ej2GridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej2GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
