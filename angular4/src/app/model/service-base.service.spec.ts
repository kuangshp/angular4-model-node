/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceBaseService } from './service-base.service';

describe('ServiceBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceBaseService]
    });
  });

  it('should ...', inject([ServiceBaseService], (service: ServiceBaseService) => {
    expect(service).toBeTruthy();
  }));
});
