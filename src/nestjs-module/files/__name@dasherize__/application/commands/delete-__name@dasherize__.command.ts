import { ICommand } from '@nestjs/cqrs';

export class Delete<%= moduleNamePascal %>Command implements ICommand {
  constructor(public readonly id: string) {}
}

