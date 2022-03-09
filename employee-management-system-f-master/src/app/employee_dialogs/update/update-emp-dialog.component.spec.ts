import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpDialogComponent } from './update-emp-dialog.component';

describe('UpdateComponent', () => {
  let component: UpdateEmpDialogComponent;
  let fixture: ComponentFixture<UpdateEmpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
