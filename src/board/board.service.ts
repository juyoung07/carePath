import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    try {
      const board = this.boardRepository.create(createBoardDto);
      return await this.boardRepository.save(board);
    } catch (error) {
      console.error('Error creating board:', error);
      throw error;
    }
  }
}
