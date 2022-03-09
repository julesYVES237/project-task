import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationrequestsComponent } from './vacationrequests.component';

describe('VacationrequestsComponent', () => {
  let component: VacationrequestsComponent;
  let fixture: ComponentFixture<VacationrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
