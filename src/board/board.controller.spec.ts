import { Test, TestingModule } from '@nestjs/testing';
import { BoardYouthsController } from './board.controller';

describe('BoardYouthsController', () => {
  let controller: BoardYouthsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardYouthsController],
    }).compile();

    controller = module.get<BoardYouthsController>(BoardYouthsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
