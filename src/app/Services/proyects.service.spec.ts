import { TestBed, inject } from '@angular/core/testing';

import { ProyectsService } from './proyects.service';

describe('ProyectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProyectsService]
    });
  });

  it('should be created', inject([ProyectsService], (service: ProyectsService) => {
    expect(service).toBeTruthy();
  }));
});
