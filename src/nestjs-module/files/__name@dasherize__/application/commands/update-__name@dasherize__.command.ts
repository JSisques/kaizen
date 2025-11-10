import { ICommand } from '@nestjs/cqrs';
import { Update<%= moduleNamePascal %>Dto } from '../dto/update-<%= moduleName %>.dto';

export class Update<%= moduleNamePascal %>Command implements ICommand {
  constructor(
    public readonly id: string,
    public readonly update<%= moduleNamePascal %>Dto: Update<%= moduleNamePascal %>Dto,
  ) {}
}

