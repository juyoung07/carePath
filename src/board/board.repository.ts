import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity'; // Board 엔티티 import

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async findOne(id: number): Promise<Board | null> {
    return this.boardRepository.findOneBy({ id });
  }

  async create(board: Board): Promise<Board> {
    return this.boardRepository.save(board);
  }

  //   업데이트와 삭제는 없음
  // async update(id: number, board: Board): Promise<Board> {
  //   await this.boardRepository.update(id, board);
  //   return this.boardRepository.findOneBy({ id }) as Promise<Board>;
  // }

  // async remove(id: number): Promise<void> {
  //   await this.boardRepository.delete(id);
  // }
}
