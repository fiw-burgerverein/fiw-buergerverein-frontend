import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UebersichtsseiteComponent } from './uebersichtsseite.component';

describe('UebersichtsseiteComponent', () => {
  let component: UebersichtsseiteComponent;
  let fixture: ComponentFixture<UebersichtsseiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UebersichtsseiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UebersichtsseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
