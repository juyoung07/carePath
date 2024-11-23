import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as boardYouthsController from './board/board.controller';
import * as boardYouthsModule from './board/board.module';
import { BoardYouthsService } from './board/board.service';
import { ChatAiController } from './chat-ai/chat-ai.controller';
import { ChatAiService } from './chat-ai/chat-ai.service';
import { ChatAiModule } from './chat-ai/chat-ai.module';

@Module({
  imports: [boardYouthsModule.BoardYouthsModule, ChatAiModule],
  controllers: [AppController, boardYouthsController.BoardYouthsController, ChatAiController],
  providers: [AppService, BoardYouthsService, ChatAiService],
})
export class AppModule {}
