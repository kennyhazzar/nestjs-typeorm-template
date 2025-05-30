import { ConfigService, ConfigModule } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { CommonConfigs, DatabaseConfigs } from '../types';
import { join } from 'path';

export const TypeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<unknown> => {
    const {
      host,
      password,
      port,
      type,
      username,
      name: database,
    } = configService.get<DatabaseConfigs>('db');

    const { env } = configService.get<CommonConfigs>('common');

    return {
      type,
      database,
      host,
      password,
      port,
      username,
      logging: env === 'development',
      entities: [join(__dirname, '../../', '/**/*.entity.{js,ts}')],
      synchronize: env === 'development',
      autoLoadEntities: true,
    };
  },
  inject: [ConfigService],
};
