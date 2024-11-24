import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  findAll(): Promise<Board[]> {
    return this.boardService.findAll();
  }

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.create(createBoardDto); // 직접 Board 객체 생성 대신 service 사용
  }
  //   async create(createJournalDto: CreateJournalDto): Promise<BoardYouths> {
  //     const boardYouth = this.boardYouthsRepository.create(createJournalDto); // DTO를 직접 사용
  //     return this.boardYouthsRepository.save(boardYouth);
  //   }
}
