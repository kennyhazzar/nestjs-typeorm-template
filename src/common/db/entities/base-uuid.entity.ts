import { PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
  CreatedAtColumn,
  UpdatedAtColumn,
  DeletedAtColumn,
} from '../decorators';

export abstract class BaseUuidEntity {
  @ApiProperty({
    description: 'UUID id',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @PrimaryGeneratedColumn('uuid', { comment: 'UUID id' })
  id: string;

  @CreatedAtColumn()
  createdAt: Date;

  @UpdatedAtColumn()
  updatedAt: Date;

  @DeletedAtColumn()
  deletedAt: Date | null;
}
