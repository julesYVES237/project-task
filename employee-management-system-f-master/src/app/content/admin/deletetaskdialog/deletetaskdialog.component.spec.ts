import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetaskdialogComponent } from './deletetaskdialog.component';

describe('DeletetaskdialogComponent', () => {
  let component: DeletetaskdialogComponent;
  let fixture: ComponentFixture<DeletetaskdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetaskdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetaskdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
