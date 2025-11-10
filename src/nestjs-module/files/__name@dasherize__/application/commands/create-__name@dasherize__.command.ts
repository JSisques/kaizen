import { ICommand } from '@nestjs/cqrs';
import { Create<%= moduleNamePascal %>Dto } from '../dto/create-<%= moduleName %>.dto';

export class Create<%= moduleNamePascal %>Command implements ICommand {
  constructor(public readonly create<%= moduleNamePascal %>Dto: Create<%= moduleNamePascal %>Dto) {}
}

