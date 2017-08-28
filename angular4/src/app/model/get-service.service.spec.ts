/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetServiceService } from './get-service.service';

describe('GetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetServiceService]
    });
  });

  it('should ...', inject([GetServiceService], (service: GetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
