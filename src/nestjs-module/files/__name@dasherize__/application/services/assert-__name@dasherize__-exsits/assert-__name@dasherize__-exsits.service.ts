import { <%= moduleNamePascal %>NotFoundException } from '@/llm-context/<%= moduleName %>/application/exceptions/<%= moduleName %>-not-found/<%= moduleName %>-not-found.exception';
import { <%= moduleNamePascal %>Aggregate } from '@/llm-context/<%= moduleName %>/domain/aggregates/<%= moduleName %>.aggregate';
import {
  <%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN,
  <%= moduleNamePascal %>WriteRepository,
} from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-write/<%= moduleName %>-write.repository';
import { IBaseService } from '@/shared/application/services/base-service.interface';
import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class Assert<%= moduleNamePascal %>ExsistsService
  implements IBaseService<string, <%= moduleNamePascal %>Aggregate>
{
  private readonly logger = new Logger(Assert<%= moduleNamePascal %>ExsistsService.name);

  constructor(
    @Inject(<%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN)
    private readonly <%= moduleNameCamel %>WriteRepository: <%= moduleNamePascal %>WriteRepository,
  ) {}

  /**
   * Asserts that a <%= moduleName %> exists by id.
   *
   * @param id - The id of the <%= moduleName %> to assert.
   * @returns The <%= moduleName %> aggregate.
   */
  async execute(id: string): Promise<<%= moduleNamePascal %>Aggregate> {
    this.logger.log(`Asserting <%= moduleName %> exists by id: ${id}`);

    // 01: Find the <%= moduleName %> by id
    const existing<%= moduleNamePascal %> = await this.<%= moduleNameCamel %>WriteRepository.findById(id);

    // 02: If the <%= moduleName %> does not exist, throw an error
    if (!existing<%= moduleNamePascal %>) {
      this.logger.error(`<%= moduleNamePascal %> not found by id: ${id}`);
      throw new <%= moduleNamePascal %>NotFoundException(id);
    }

    return existing<%= moduleNamePascal %>;
  }
}

