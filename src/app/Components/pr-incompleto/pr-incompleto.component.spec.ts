import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrIncompletoComponent } from './pr-incompleto.component';


describe('PrIncompletoComponent', () => {
  let component: PrIncompletoComponent;
  let fixture: ComponentFixture<PrIncompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrIncompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrIncompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
