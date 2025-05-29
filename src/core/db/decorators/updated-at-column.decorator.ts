import { UpdateDateColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export function UpdatedAtColumn(): PropertyDecorator {
  return (target, propertyKey) => {
    ApiProperty({
      description: 'Дата последнего обновления сущности',
      example: '2023-10-06T12:34:56.000Z',
    })(target, propertyKey);
    Index()(target, propertyKey);
    UpdateDateColumn({ name: 'updated_at', comment: 'Дата обновления' })(
      target,
      propertyKey,
    );
  };
}
