import { <%= moduleNamePascal %>Aggregate } from '@/llm-context/<%= moduleName %>/domain/aggregates/<%= moduleName %>.aggregate';
import { I<%= moduleNamePascal %>CreateViewModelDto } from '@/llm-context/<%= moduleName %>/domain/dtos/view-models/<%= moduleName %>-create-view-model/<%= moduleName %>-create-view-model.dto';
import { <%= moduleNamePascal %>Primitives } from '@/llm-context/<%= moduleName %>/domain/primitives/<%= moduleName %>.primitives';
import { <%= moduleNamePascal %>ViewModel } from '@/llm-context/<%= moduleName %>/domain/view-models/<%= moduleName %>.view-model';
import { IReadFactory } from '@/shared/domain/interfaces/read-factory.interface';
import { Injectable, Logger } from '@nestjs/common';

/**
 * This factory class is used to create a new <%= moduleName %> view model.
 */
@Injectable()
export class <%= moduleNamePascal %>ViewModelFactory
  implements
    IReadFactory<
      <%= moduleNamePascal %>ViewModel,
      I<%= moduleNamePascal %>CreateViewModelDto,
      <%= moduleNamePascal %>Aggregate,
      <%= moduleNamePascal %>Primitives
    >
{
  private readonly logger = new Logger(<%= moduleNamePascal %>ViewModelFactory.name);

  /**
   * Creates a new <%= moduleName %> view model from a DTO.
   * @param data - The data to create the view model from.
   * @returns The created view model.
   */
  public create(data: I<%= moduleNamePascal %>CreateViewModelDto): <%= moduleNamePascal %>ViewModel {
    this.logger.log(
      `Creating <%= moduleName %> view model from DTO: ${JSON.stringify(data)}`,
    );
    return new <%= moduleNamePascal %>ViewModel(data);
  }

  /**
   * Creates a new <%= moduleName %> view model from a <%= moduleName %> primitive.
   *
   * @param <%= moduleNameCamel %>Primitives - The <%= moduleName %> primitive to create the view model from.
   * @returns The <%= moduleName %> view model.
   */
  fromPrimitives(<%= moduleNameCamel %>Primitives: <%= moduleNamePascal %>Primitives): <%= moduleNamePascal %>ViewModel {
    this.logger.log(
      `Creating <%= moduleName %> view model from primitives: ${<%= moduleNameCamel %>Primitives}`,
    );

    const now = new Date();

    return new <%= moduleNamePascal %>ViewModel({
      id: <%= moduleNameCamel %>Primitives.id,
      slug: <%= moduleNameCamel %>Primitives.slug,
      version: <%= moduleNameCamel %>Primitives.version,
      title: <%= moduleNameCamel %>Primitives.title,
      description: <%= moduleNameCamel %>Primitives.description,
      content: <%= moduleNameCamel %>Primitives.content,
      status: <%= moduleNameCamel %>Primitives.status,
      isActive: <%= moduleNameCamel %>Primitives.isActive,
      createdAt: now,
      updatedAt: now,
    });
  }

  /**
   * Creates a new <%= moduleName %> view model from a <%= moduleName %> aggregate.
   *
   * @param <%= moduleNameCamel %>Aggregate - The <%= moduleName %> aggregate to create the view model from.
   * @returns The <%= moduleName %> view model.
   */
  fromAggregate(<%= moduleNameCamel %>Aggregate: <%= moduleNamePascal %>Aggregate): <%= moduleNamePascal %>ViewModel {
    this.logger.log(
      `Creating <%= moduleName %> view model from aggregate: ${<%= moduleNameCamel %>Aggregate}`,
    );

    const now = new Date();

    return new <%= moduleNamePascal %>ViewModel({
      id: <%= moduleNameCamel %>Aggregate.id.value,
      slug: <%= moduleNameCamel %>Aggregate.slug.value,
      version: <%= moduleNameCamel %>Aggregate.version.value,
      title: <%= moduleNameCamel %>Aggregate.title.value,
      description: <%= moduleNameCamel %>Aggregate.description?.value ?? null,
      content: <%= moduleNameCamel %>Aggregate.content.value,
      status: <%= moduleNameCamel %>Aggregate.status.value,
      isActive: <%= moduleNameCamel %>Aggregate.isActive.value,
      createdAt: now,
      updatedAt: now,
    });
  }
}

