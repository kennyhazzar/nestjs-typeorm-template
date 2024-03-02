import { ConfigService, ConfigModule } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabaseConfigs } from '../types';
import { join } from 'path';

export const TypeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<unknown> => ({
    ...configService.get<DatabaseConfigs>('db'),
    logging: configService.get('env.type') === 'development',
    entities: [join(__dirname, '../../', '/**/*.entity.{js,ts}')],
    synchronize: true,
    autoLoadEntities: true,
  }),
  inject: [ConfigService],
};