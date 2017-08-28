/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostServiceService } from './post-service.service';

describe('PostServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostServiceService]
    });
  });

  it('should ...', inject([PostServiceService], (service: PostServiceService) => {
    expect(service).toBeTruthy();
  }));
});
