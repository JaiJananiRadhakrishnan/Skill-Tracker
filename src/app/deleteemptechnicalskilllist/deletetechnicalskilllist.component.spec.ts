import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetechnicalskilllistComponent } from './deletetechnicalskilllist.component';

describe('DeletetechnicalskilllistComponent', () => {
  let component: DeletetechnicalskilllistComponent;
  let fixture: ComponentFixture<DeletetechnicalskilllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetechnicalskilllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetechnicalskilllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
