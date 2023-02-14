import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnontechnicalskilllistComponent } from './addnontechnicalskilllist.component';

describe('AddnontechnicalskilllistComponent', () => {
  let component: AddnontechnicalskilllistComponent;
  let fixture: ComponentFixture<AddnontechnicalskilllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnontechnicalskilllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnontechnicalskilllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
