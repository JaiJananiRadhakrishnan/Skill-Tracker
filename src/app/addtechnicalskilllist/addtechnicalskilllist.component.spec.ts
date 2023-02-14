import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtechnicalskilllistComponent } from './addtechnicalskilllist.component';

describe('AddtechnicalskilllistComponent', () => {
  let component: AddtechnicalskilllistComponent;
  let fixture: ComponentFixture<AddtechnicalskilllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtechnicalskilllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtechnicalskilllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
