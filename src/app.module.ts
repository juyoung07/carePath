import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as boardYouthsController from './board/board.controller';
import * as boardYouthsModule from './board/board.module';
import { BoardYouthsService } from './board/board.service';

@Module({
  imports: [boardYouthsModule.BoardYouthsModule],
  controllers: [AppController, boardYouthsController.BoardYouthsController],
  providers: [AppService, BoardYouthsService],
})
export class AppModule {}
