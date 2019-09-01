import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2jGridComponent } from './e2j-grid.component';

describe('E2jGridComponent', () => {
  let component: E2jGridComponent;
  let fixture: ComponentFixture<E2jGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2jGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2jGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
