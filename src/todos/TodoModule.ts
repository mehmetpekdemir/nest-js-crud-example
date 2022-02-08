import { Module } from '@nestjs/common';
import { TodoController } from './controller/TodoController';
import { TodoService } from './service/TodoService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entity/TodoEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntity])
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
