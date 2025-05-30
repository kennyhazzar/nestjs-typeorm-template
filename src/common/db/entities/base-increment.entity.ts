import { PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
  CreatedAtColumn,
  UpdatedAtColumn,
  DeletedAtColumn,
} from '../decorators';

export abstract class BaseIncrementEntity {
  @ApiProperty({
    description: 'Increment id',
    example: 1,
  })
  @PrimaryGeneratedColumn('increment', { comment: 'Increment id' })
  id: number;

  @CreatedAtColumn()
  createdAt: Date;

  @UpdatedAtColumn()
  updatedAt: Date;

  @DeletedAtColumn()
  deletedAt: Date | null;
}
