import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletenontechnicalskilllistComponent } from './deletenontechnicalskilllist.component';

describe('DeletenontechnicalskilllistComponent', () => {
  let component: DeletenontechnicalskilllistComponent;
  let fixture: ComponentFixture<DeletenontechnicalskilllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletenontechnicalskilllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletenontechnicalskilllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
