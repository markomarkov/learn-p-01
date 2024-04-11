import { Test, TestingModule } from '@nestjs/testing';
import { MyLibNestService } from './my-lib-nest.service';

describe('MyLibNestService', () => {
  let service: MyLibNestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyLibNestService],
    }).compile();

    service = module.get<MyLibNestService>(MyLibNestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
