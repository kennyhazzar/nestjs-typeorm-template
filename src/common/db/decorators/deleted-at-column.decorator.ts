import { DeleteDateColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export function DeletedAtColumn(): PropertyDecorator {
  return (target, propertyKey) => {
    ApiProperty({
      description: 'Дата удаления сущности (null, если не удалена)',
      example: null,
      nullable: true,
    })(target, propertyKey);
    Index()(target, propertyKey);
    DeleteDateColumn({
      name: 'deleted_at',
      nullable: true,
      comment: 'Дата удаления',
    })(target, propertyKey);
  };
}
