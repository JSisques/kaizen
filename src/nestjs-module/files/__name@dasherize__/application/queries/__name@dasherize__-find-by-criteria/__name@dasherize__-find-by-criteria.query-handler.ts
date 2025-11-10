import {
  <%= moduleNameUpper %>_READ_REPOSITORY_TOKEN,
  <%= moduleNamePascal %>ReadRepository,
} from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-read/<%= moduleName %>-read.repository';
import { <%= moduleNamePascal %>ViewModel } from '@/llm-context/<%= moduleName %>/domain/view-models/<%= moduleName %>.view-model';
import { PaginatedResult } from '@/shared/domain/entities/paginated-result.entity';
import { Inject, Logger } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Find<%= moduleNamePascal %>sByCriteriaQuery } from './<%= moduleName %>-find-by-criteria.query';

@QueryHandler(Find<%= moduleNamePascal %>sByCriteriaQuery)
export class Find<%= moduleNamePascal %>sByCriteriaQueryHandler
  implements IQueryHandler<Find<%= moduleNamePascal %>sByCriteriaQuery>
{
  private readonly logger = new Logger(Find<%= moduleNamePascal %>sByCriteriaQueryHandler.name);

  constructor(
    @Inject(<%= moduleNameUpper %>_READ_REPOSITORY_TOKEN)
    private readonly <%= moduleNameCamel %>ReadRepository: <%= moduleNamePascal %>ReadRepository,
  ) {}

  /**
   * Executes the Find<%= moduleNamePascal %>sByCriteriaQuery query.
   *
   * @param query - The Find<%= moduleNamePascal %>sByCriteriaQuery query to execute.
   * @returns The PaginatedResult of <%= moduleNamePascal %>ViewModels.
   */
  async execute(
    query: Find<%= moduleNamePascal %>sByCriteriaQuery,
  ): Promise<PaginatedResult<<%= moduleNamePascal %>ViewModel>> {
    this.logger.log(
      `Executing find <%= moduleName %>s by criteria query: ${query.criteria.toString()}`,
    );

    // 01: Find the <%= moduleName %>s by criteria
    return this.<%= moduleNameCamel %>ReadRepository.findByCriteria(query.criteria);
  }
}

