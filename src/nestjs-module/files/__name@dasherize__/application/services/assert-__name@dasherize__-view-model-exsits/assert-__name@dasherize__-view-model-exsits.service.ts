import { <%= moduleNamePascal %>NotFoundException } from '@/llm-context/<%= moduleName %>/application/exceptions/<%= moduleName %>-not-found/<%= moduleName %>-not-found.exception';
import {
  <%= moduleNameUpper %>_READ_REPOSITORY_TOKEN,
  <%= moduleNamePascal %>ReadRepository,
} from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-read/<%= moduleName %>-read.repository';
import { <%= moduleNamePascal %>ViewModel } from '@/llm-context/<%= moduleName %>/domain/view-models/<%= moduleName %>.view-model';
import { IBaseService } from '@/shared/application/services/base-service.interface';
import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class Assert<%= moduleNamePascal %>ViewModelExsistsService
  implements IBaseService<string, <%= moduleNamePascal %>ViewModel>
{
  private readonly logger = new Logger(
    Assert<%= moduleNamePascal %>ViewModelExsistsService.name,
  );

  constructor(
    @Inject(<%= moduleNameUpper %>_READ_REPOSITORY_TOKEN)
    private readonly <%= moduleNameCamel %>ReadRepository: <%= moduleNamePascal %>ReadRepository,
  ) {}

  /**
   * Asserts that a <%= moduleName %> view model exists by id.
   *
   * @param id - The id of the <%= moduleName %> view model to assert.
   * @returns The <%= moduleName %> view model.
   * @throws <%= moduleNamePascal %>NotFoundException if the <%= moduleName %> view model does not exist.
   */
  async execute(id: string): Promise<<%= moduleNamePascal %>ViewModel> {
    this.logger.log(`Asserting <%= moduleName %> view model exists by id: ${id}`);

    // 01: Find the <%= moduleName %> by id
    const existing<%= moduleNamePascal %>ViewModel =
      await this.<%= moduleNameCamel %>ReadRepository.findById(id);

    // 02: If the <%= moduleName %> view model does not exist, throw an error
    if (!existing<%= moduleNamePascal %>ViewModel) {
      this.logger.error(`<%= moduleNamePascal %> view model not found by id: ${id}`);
      throw new <%= moduleNamePascal %>NotFoundException(id);
    }

    return existing<%= moduleNamePascal %>ViewModel;
  }
}

