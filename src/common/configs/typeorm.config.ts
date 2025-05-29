import { ConfigService, ConfigModule } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabaseConfigs } from '../types';
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

    return {
      type,
      database,
      host,
      password,
      port,
      username,
      logging: configService.get('env.type') === 'development',
      entities: [join(__dirname, '../../', '/**/*.entity.{js,ts}')],
      synchronize: false,
      autoLoadEntities: true,
    };
  },
  inject: [ConfigService],
};
