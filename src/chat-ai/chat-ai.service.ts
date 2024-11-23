import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { QuestionsResponse, ChatResponse } from './types/chat.types'; // 경로 수정 필요

@Injectable()
export class ChatAiService {
  private genAI: GoogleGenerativeAI;
  private model: any;
  private readonly logger = new Logger(ChatAiService.name);

  constructor(private configService: ConfigService) {
    this.genAI = new GoogleGenerativeAI(
      this.configService.get<string>('GEMINI_API_KEY'),
    );
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
  }

  async generateQuestions(category: string): Promise<QuestionsResponse> {
    // 하드코딩 대신 데이터베이스나 설정 파일에서 질문 가져오기
    const questions = this.getQuestionsFromSource(category); // getQuestionsFromSource 함수 구현 필요
    return { questions };
  }

  private getQuestionsFromSource(category: string): string[] {
    // 데이터베이스, 설정 파일 등에서 질문을 가져오는 로직 구현
    // 이 예시는 하드코딩된 기본값을 사용합니다.
    const categoryPrompts = {
      /* ... 기존 categoryPrompts ... */
    };
    return categoryPrompts[category] || [];
  }

  async generateResponse(
    category: string,
    question: string,
    userContext?: string,
  ): Promise<ChatResponse> {
    try {
      const chat = await this.model.startChat({
        history: [
          {
            role: 'user',
            parts:
              '당신은 친절한 취업 상담사입니다. 상담자의 이야기를 경청하고, 구체적이고 실용적인 조언을 제공해주세요.',
          },
          {
            role: 'model',
            parts:
              '네, 이해했습니다. 취업 준비생들의 고민을 경청하고 실질적인 도움이 되는 조언을 제공하도록 하겠습니다.',
          },
        ],
      });

      const contextPrompt = userContext
        ? `상황: ${userContext}\n질문: ${question}`
        : question;

      const result = await chat.sendMessage(contextPrompt);
      const response = await result.response;

      return {
        answer: response.text(),
        category,
        question,
      };
    } catch (error) {
      this.logger.error(`답변 생성 실패: ${error.message}`, error.stack);
      throw new Error(
        'AI로부터 답변을 받는 데 실패했습니다. 나중에 다시 시도해주세요.',
      ); // 사용자 친화적인 에러 메시지
    }
  }
}
