import {
  <%= moduleNameUpper %>_READ_REPOSITORY_TOKEN,
  <%= moduleNamePascal %>ReadRepository,
} from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-read/<%= moduleName %>-read.repository';
import { <%= moduleNamePascal %>Aggregate } from '@/llm-context/<%= moduleName %>/domain/aggregates/<%= moduleName %>.aggregate';
import { Inject, Logger } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Find<%= moduleNamePascal %>ByIdQuery } from './<%= moduleName %>-find-by-id.query';

@QueryHandler(Find<%= moduleNamePascal %>ByIdQuery)
export class Find<%= moduleNamePascal %>ByIdQueryHandler
  implements IQueryHandler<Find<%= moduleNamePascal %>ByIdQuery>
{
  private readonly logger = new Logger(Find<%= moduleNamePascal %>ByIdQueryHandler.name);

  constructor(
    @Inject(<%= moduleNameUpper %>_READ_REPOSITORY_TOKEN)
    private readonly <%= moduleNameCamel %>ReadRepository: <%= moduleNamePascal %>ReadRepository,
  ) {}

  /**
   * Executes the Find<%= moduleNamePascal %>ByIdQuery query.
   *
   * @param query - The Find<%= moduleNamePascal %>ByIdQuery query to execute.
   * @returns The <%= moduleNamePascal %>Aggregate if found, null otherwise.
   */
  async execute(query: Find<%= moduleNamePascal %>ByIdQuery): Promise<<%= moduleNamePascal %>Aggregate | null> {
    this.logger.log(
      `Executing find <%= moduleName %> by id query: ${query.id.value}`,
    );

    // 01: Find the <%= moduleName %> by id
    return this.<%= moduleNameCamel %>ReadRepository.findById(query.id.value);
  }
}

