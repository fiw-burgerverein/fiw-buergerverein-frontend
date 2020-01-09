import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenschutzFooterComponent } from './datenschutz-footer.component';

describe('DatenschutzFooterComponent', () => {
  let component: DatenschutzFooterComponent;
  let fixture: ComponentFixture<DatenschutzFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatenschutzFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenschutzFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
