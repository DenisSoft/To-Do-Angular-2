import { TestBed, inject } from '@angular/core/testing';

import { FilterCategoriesService } from './filter-categories.service';

describe('FilterCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterCategoriesService]
    });
  });

  it('should be created', inject([FilterCategoriesService], (service: FilterCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
