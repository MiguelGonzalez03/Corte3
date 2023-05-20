import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Users} from './users/user.entitie';
import { ConfigModule } from '@nestjs/config';
import { ProcedimientoController } from './procedimiento/procedimiento.controller';
import { TareaDController } from './tarea-d/tarea-d.controller';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME,
      entities: [Users],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [ProcedimientoController, TareaDController],
  providers: [],
})
export class AppModule {}
