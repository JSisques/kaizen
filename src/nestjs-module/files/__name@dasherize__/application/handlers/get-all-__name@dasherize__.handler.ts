import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAll<%= moduleNamePascal %>Query } from '../queries/get-all-<%= moduleName %>.query';
import { <%= moduleNamePascal %>Repository } from '../../domain/repositories/<%= moduleName %>.repository';
import { <%= moduleNamePascal %> } from '../../domain/entities/<%= moduleName %>.entity';

@QueryHandler(GetAll<%= moduleNamePascal %>Query)
export class GetAll<%= moduleNamePascal %>Handler
  implements IQueryHandler<GetAll<%= moduleNamePascal %>Query>
{
  constructor(
    private readonly <%= moduleNameCamel %>Repository: <%= moduleNamePascal %>Repository,
  ) {}

  async execute(query: GetAll<%= moduleNamePascal %>Query): Promise<<%= moduleNamePascal %>[]> {
    return this.<%= moduleNameCamel %>Repository.findAll();
  }
}

