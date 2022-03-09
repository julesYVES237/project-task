import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hom222eComponent } from './hom222e.component';

describe('Hom222eComponent', () => {
  let component: Hom222eComponent;
  let fixture: ComponentFixture<Hom222eComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hom222eComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hom222eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
