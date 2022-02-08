export class UpdateTodoRequest {
  readonly id: number;
  readonly title: string;
  readonly description?: string;
  readonly done: boolean;
}
