import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrTerminadoComponent } from './pr-terminado.component';

describe('PrTerminadoComponent', () => {
  let component: PrTerminadoComponent;
  let fixture: ComponentFixture<PrTerminadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTerminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTerminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
