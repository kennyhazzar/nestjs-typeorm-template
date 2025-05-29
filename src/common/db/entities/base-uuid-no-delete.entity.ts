import { PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { CreatedAtColumn, UpdatedAtColumn } from '../decorators';

export abstract class BaseUuidNoDeleteEntity {
  @ApiProperty({
    description: 'UUID идентификатор',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @PrimaryGeneratedColumn('uuid', { comment: 'UUID идентификатор' })
  id: string;

  @CreatedAtColumn()
  createdAt: Date;

  @UpdatedAtColumn()
  updatedAt: Date;
}
