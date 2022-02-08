import { Injectable } from '@nestjs/common';
import { TodoResponse } from '../controller/response/TodoResponse';
import { CreateTodoRequest } from '../controller/request/CreateTodoRequest';
import { UpdateTodoRequest } from '../controller/request/UpdateTodoRequest';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from '../entity/TodoEntity';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly TodoRepository: Repository<TodoEntity>,
  ) {}

  getAll(): Observable<TodoResponse[]> {
    return from(this.TodoRepository.find());
  }

  getById(id: string): Observable<TodoResponse> {
    return from(this.TodoRepository.findOne(id));
  }

  create(request: CreateTodoRequest): Observable<TodoResponse> {
    return from(this.TodoRepository.save(request));
  }

  update(request: UpdateTodoRequest): Observable<any> {
    return from(this.TodoRepository.update(request.id, request));
  }

  delete(id: string): Observable<any> {
    return from(this.TodoRepository.delete(id));
  }
}
