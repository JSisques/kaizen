import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';
import { Update<%= moduleNamePascal %>Command } from '../commands/update-<%= moduleName %>.command';
import { <%= moduleNamePascal %>Repository } from '../../domain/repositories/<%= moduleName %>.repository';
import { <%= moduleNamePascal %> } from '../../domain/entities/<%= moduleName %>.entity';

@CommandHandler(Update<%= moduleNamePascal %>Command)
export class Update<%= moduleNamePascal %>Handler
  implements ICommandHandler<Update<%= moduleNamePascal %>Command>
{
  constructor(
    private readonly <%= moduleNameCamel %>Repository: <%= moduleNamePascal %>Repository,
  ) {}

  async execute(command: Update<%= moduleNamePascal %>Command): Promise<<%= moduleNamePascal %>> {
    const { id, update<%= moduleNamePascal %>Dto } = command;

    const <%= moduleNameCamel %> = await this.<%= moduleNameCamel %>Repository.findById(id);

    if (!<%= moduleNameCamel %>) {
      throw new NotFoundException(`<%= moduleNamePascal %> with ID ${id} not found`);
    }

    // Update entity properties
    Object.assign(<%= moduleNameCamel %>, update<%= moduleNamePascal %>Dto);

    return this.<%= moduleNameCamel %>Repository.save(<%= moduleNameCamel %>);
  }
}

