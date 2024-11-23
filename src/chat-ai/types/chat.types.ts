// types/chat.types.ts
export interface ChatResponse {
  answer: string;
  category: string;
  question: string;
}

export interface QuestionsResponse {
  questions: string[];
}
