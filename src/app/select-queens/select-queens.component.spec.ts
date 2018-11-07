import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQueensComponent } from './select-queens.component';

describe('SelectQueensComponent', () => {
  let component: SelectQueensComponent;
  let fixture: ComponentFixture<SelectQueensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectQueensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectQueensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
