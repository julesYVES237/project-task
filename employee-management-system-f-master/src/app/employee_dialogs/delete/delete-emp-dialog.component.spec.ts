import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpDialogComponent } from './delete-emp-dialog.component';

describe('DeleteComponent', () => {
  let component: DeleteEmpDialogComponent;
  let fixture: ComponentFixture<DeleteEmpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
