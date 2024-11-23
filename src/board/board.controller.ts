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
  create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    const board = new Board();
    board.name = createBoardDto.name;
    board.content = createBoardDto.content;
    return this.boardService.create(board);
  }
  //   async create(createJournalDto: CreateJournalDto): Promise<BoardYouths> {
  //     const boardYouth = this.boardYouthsRepository.create(createJournalDto); // DTO를 직접 사용
  //     return this.boardYouthsRepository.save(boardYouth);
  //   }
}
