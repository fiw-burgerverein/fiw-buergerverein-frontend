import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoseiteComponent } from './infoseite.component';

describe('InfoseiteComponent', () => {
  let component: InfoseiteComponent;
  let fixture: ComponentFixture<InfoseiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoseiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
