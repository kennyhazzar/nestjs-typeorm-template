import { CreateDateColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export function CreatedAtColumn(): PropertyDecorator {
  return (target, propertyKey) => {
    ApiProperty({
      description: 'Дата создания сущности',
      example: '2023-10-05T12:34:56.000Z',
    })(target, propertyKey);
    Index()(target, propertyKey);
    CreateDateColumn({ name: 'created_at', comment: 'Дата создания' })(
      target,
      propertyKey,
    );
  };
}
