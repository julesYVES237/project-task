import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskdialogComponent } from './addtaskdialog.component';

describe('AddtaskdialogComponent', () => {
  let component: AddtaskdialogComponent;
  let fixture: ComponentFixture<AddtaskdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtaskdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
