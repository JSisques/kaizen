import { Assert<%= moduleNamePascal %>ViewModelExsistsService } from '@/llm-context/<%= moduleName %>/application/services/assert-<%= moduleName %>-view-model-exsits/assert-<%= moduleName %>-view-model-exsits.service';
import { <%= moduleNamePascal %>ViewModel } from '@/llm-context/<%= moduleName %>/domain/view-models/<%= moduleName %>.view-model';
import { Logger } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Find<%= moduleNamePascal %>ViewModelByIdQuery } from './<%= moduleName %>-find-view-model-by-id.query';

@QueryHandler(Find<%= moduleNamePascal %>ViewModelByIdQuery)
export class Find<%= moduleNamePascal %>ViewModelByIdQueryHandler
  implements IQueryHandler<Find<%= moduleNamePascal %>ViewModelByIdQuery>
{
  private readonly logger = new Logger(
    Find<%= moduleNamePascal %>ViewModelByIdQueryHandler.name,
  );

  constructor(
    private readonly assert<%= moduleNamePascal %>ViewModelExsistsService: Assert<%= moduleNamePascal %>ViewModelExsistsService,
  ) {}

  /**
   * Executes the Find<%= moduleNamePascal %>ViewModelByIdQuery query.
   *
   * @param query - The Find<%= moduleNamePascal %>ViewModelByIdQuery query to execute.
   * @returns The <%= moduleNamePascal %>ViewModel if found, null otherwise.
   */
  async execute(query: Find<%= moduleNamePascal %>ViewModelByIdQuery): Promise<<%= moduleNamePascal %>ViewModel> {
    this.logger.log(
      `Executing find <%= moduleName %> view model by id query: ${query.id.value}`,
    );

    // 01: Assert that the <%= moduleName %> view model exists
    return await this.assert<%= moduleNamePascal %>ViewModelExsistsService.execute(
      query.id.value,
    );
  }
}

