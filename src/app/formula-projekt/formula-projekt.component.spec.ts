import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaProjektComponent } from './formula-projekt.component';

describe('FormulaProjektComponent', () => {
  let component: FormulaProjektComponent;
  let fixture: ComponentFixture<FormulaProjektComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaProjektComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
