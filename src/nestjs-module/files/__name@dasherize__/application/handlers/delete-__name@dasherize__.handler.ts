import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';
import { Delete<%= moduleNamePascal %>Command } from '../commands/delete-<%= moduleName %>.command';
import { <%= moduleNamePascal %>Repository } from '../../domain/repositories/<%= moduleName %>.repository';

@CommandHandler(Delete<%= moduleNamePascal %>Command)
export class Delete<%= moduleNamePascal %>Handler
  implements ICommandHandler<Delete<%= moduleNamePascal %>Command>
{
  constructor(
    private readonly <%= moduleNameCamel %>Repository: <%= moduleNamePascal %>Repository,
  ) {}

  async execute(command: Delete<%= moduleNamePascal %>Command): Promise<void> {
    const { id } = command;

    const <%= moduleNameCamel %> = await this.<%= moduleNameCamel %>Repository.findById(id);

    if (!<%= moduleNameCamel %>) {
      throw new NotFoundException(`<%= moduleNamePascal %> with ID ${id} not found`);
    }

    await this.<%= moduleNameCamel %>Repository.delete(id);
  }
}

