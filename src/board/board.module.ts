import { Module } from '@nestjs/common';
import { BoardYouthsService } from './board.service';
import { BoardYouthsController } from './board.controller';

@Module({
  providers: [BoardYouthsService],
  controllers: [BoardYouthsController],
})
export class BoardYouthsModule {}
