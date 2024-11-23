import { Test, TestingModule } from '@nestjs/testing';
import { BoardYouthsService } from './board.service';

describe('BoardYouthsService', () => {
  let service: BoardYouthsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardYouthsService],
    }).compile();

    service = module.get<BoardYouthsService>(BoardYouthsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
