export class GenerateQuestionsDto {
  category: string;
}

export class ChatRequestDto {
  category: string;
  question: string;
  userContext?: string;
}
