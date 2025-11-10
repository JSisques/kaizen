import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Create<%= moduleNamePascal %>Command } from '../commands/create-<%= moduleName %>.command';
import { <%= moduleNamePascal %>Repository } from '../../domain/repositories/<%= moduleName %>.repository';
import { <%= moduleNamePascal %> } from '../../domain/entities/<%= moduleName %>.entity';

@CommandHandler(Create<%= moduleNamePascal %>Command)
export class Create<%= moduleNamePascal %>Handler
  implements ICommandHandler<Create<%= moduleNamePascal %>Command>
{
  constructor(
    private readonly <%= moduleNameCamel %>Repository: <%= moduleNamePascal %>Repository,
  ) {}

  async execute(command: Create<%= moduleNamePascal %>Command): Promise<<%= moduleNamePascal %>> {
    const { create<%= moduleNamePascal %>Dto } = command;

    // Create domain entity
    const <%= moduleNameCamel %> = new <%= moduleNamePascal %>(create<%= moduleNamePascal %>Dto);

    // Save using repository
    return this.<%= moduleNameCamel %>Repository.save(<%= moduleNameCamel %>);
  }
}

