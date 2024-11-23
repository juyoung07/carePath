import { IsNotEmpty, IsString } from 'class-validator';

export class CreateJournalDto {
  name: string;
  content: string;
}
