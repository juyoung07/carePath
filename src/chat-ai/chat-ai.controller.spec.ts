import { Test, TestingModule } from '@nestjs/testing';
import { ChatAiController } from './chat-ai.controller';

describe('ChatAiController', () => {
  let controller: ChatAiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatAiController],
    }).compile();

    controller = module.get<ChatAiController>(ChatAiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
