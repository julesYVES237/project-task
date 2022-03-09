import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpDialogComponent } from './add-emp-dialog.component';

describe('AddComponent', () => {
  let component: AddEmpDialogComponent;
  let fixture: ComponentFixture<AddEmpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
