import { TestBed, inject } from '@angular/core/testing';

import { FireBaseProviderService } from './fire-base-provider.service';

describe('FireBaseProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireBaseProviderService]
    });
  });

  it('should be created', inject([FireBaseProviderService], (service: FireBaseProviderService) => {
    expect(service).toBeTruthy();
  }));
});
