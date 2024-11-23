import { Test, TestingModule } from '@nestjs/testing';
import { ChatAiService } from './chat-ai.service';

describe('ChatAiService', () => {
  let service: ChatAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatAiService],
    }).compile();

    service = module.get<ChatAiService>(ChatAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
