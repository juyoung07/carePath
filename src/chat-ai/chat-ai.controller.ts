import { Body, Controller, Post } from '@nestjs/common';
import { ChatAiService } from './chat-ai.service';

@Controller('chat-ai')
export class ChatAiController {
  constructor(private readonly chatAiService: ChatAiService) {}

  @Post('questions')
  async generateQuestions(@Body() body: { category: string }) {
    return await this.chatAiService.generateQuestions(body.category);
  }

  @Post('chat')
  async getAiResponse(
    @Body() body: { category: string; question: string; userContext?: string },
  ) {
    return await this.chatAiService.generateResponse(
      body.category,
      body.question,
      body.userContext,
    );
  }
}
