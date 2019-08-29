import { TestBed } from '@angular/core/testing';

import { NgFixedElementService } from './ng-fixed-element.service';

describe('NgFixedElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFixedElementService = TestBed.get(NgFixedElementService);
    expect(service).toBeTruthy();
  });
});
