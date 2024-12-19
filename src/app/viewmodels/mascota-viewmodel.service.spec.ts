import { TestBed } from '@angular/core/testing';

import { MascotaViewmodelService } from './mascota-viewmodel.service';

describe('MascotaViewmodelService', () => {
  let service: MascotaViewmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotaViewmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
