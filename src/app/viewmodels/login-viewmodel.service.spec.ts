import { TestBed } from '@angular/core/testing';

import { LoginViewmodelService } from './login-viewmodel.service';

describe('LoginViewmodelService', () => {
  let service: LoginViewmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginViewmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
