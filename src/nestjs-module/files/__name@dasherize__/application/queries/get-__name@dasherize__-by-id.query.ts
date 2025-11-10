import { IQuery } from '@nestjs/cqrs';

export class Get<%= moduleNamePascal %>ByIdQuery implements IQuery {
  constructor(public readonly id: string) {}
}

