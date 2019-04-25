import { TestBed } from '@angular/core/testing';

import { DailyTaskService } from './daily-task.service';

describe('DailyTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyTaskService = TestBed.get(DailyTaskService);
    expect(service).toBeTruthy();
  });
});
