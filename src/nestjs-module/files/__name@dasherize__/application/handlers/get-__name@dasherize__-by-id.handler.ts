import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { NotFoundException } from '@nestjs/common';
import { Get<%= moduleNamePascal %>ByIdQuery } from '../queries/get-<%= moduleName %>-by-id.query';
import { <%= moduleNamePascal %>Repository } from '../../domain/repositories/<%= moduleName %>.repository';
import { <%= moduleNamePascal %> } from '../../domain/entities/<%= moduleName %>.entity';

@QueryHandler(Get<%= moduleNamePascal %>ByIdQuery)
export class Get<%= moduleNamePascal %>ByIdHandler
  implements IQueryHandler<Get<%= moduleNamePascal %>ByIdQuery>
{
  constructor(
    private readonly <%= moduleNameCamel %>Repository: <%= moduleNamePascal %>Repository,
  ) {}

  async execute(query: Get<%= moduleNamePascal %>ByIdQuery): Promise<<%= moduleNamePascal %>> {
    const { id } = query;

    const <%= moduleNameCamel %> = await this.<%= moduleNameCamel %>Repository.findById(id);

    if (!<%= moduleNameCamel %>) {
      throw new NotFoundException(`<%= moduleNamePascal %> with ID ${id} not found`);
    }

    return <%= moduleNameCamel %>;
  }
}

