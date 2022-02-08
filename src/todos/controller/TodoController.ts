import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

import { TodoService } from '../service/TodoService';
import { TodoResponse } from './response/TodoResponse';
import { CreateTodoRequest } from './request/CreateTodoRequest';
import { UpdateTodoRequest } from './request/UpdateTodoRequest';

import { Observable } from 'rxjs';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): Observable<TodoResponse[]> {
    return this.todoService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Observable<TodoResponse> {
    return this.todoService.getById(id);
  }

  @Post()
  createTodo(@Body() newTodo: CreateTodoRequest): Observable<TodoResponse> {
    return this.todoService.create(newTodo);
  }

  @Put()
  updateTodo(@Body() todo: UpdateTodoRequest): Observable<any> {
    return this.todoService.update(todo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Observable<any> {
    return this.todoService.delete(id);
  }
}
