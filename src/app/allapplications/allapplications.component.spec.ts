import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllapplicationsComponent } from './allapplications.component';

describe('AllapplicationsComponent', () => {
  let component: AllapplicationsComponent;
  let fixture: ComponentFixture<AllapplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllapplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
