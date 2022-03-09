import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntaskdialogComponent } from './assigntaskdialog.component';

describe('AssigntaskdialogComponent', () => {
  let component: AssigntaskdialogComponent;
  let fixture: ComponentFixture<AssigntaskdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigntaskdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigntaskdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
