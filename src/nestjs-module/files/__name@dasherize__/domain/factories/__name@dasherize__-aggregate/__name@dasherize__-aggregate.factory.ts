import { <%= moduleNamePascal %>Aggregate } from '@/llm-context/<%= moduleName %>/domain/aggregates/<%= moduleName %>.aggregate';
import { I<%= moduleNamePascal %>CreateDto } from '@/llm-context/<%= moduleName %>/domain/dtos/entities/<%= moduleName %>-create/<%= moduleName %>-create.dto';
import { <%= moduleNamePascal %>Primitives } from '@/llm-context/<%= moduleName %>/domain/primitives/<%= moduleName %>.primitives';
import { <%= moduleNamePascal %>ContentValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-content/<%= moduleName %>-content.vo';
import { <%= moduleNamePascal %>DescriptionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-description/<%= moduleName %>-description.vo';
import { <%= moduleNamePascal %>IsActiveValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-is-active/<%= moduleName %>-is-active.vo';
import { <%= moduleNamePascal %>SlugValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-slug/<%= moduleName %>-slug.vo';
import { <%= moduleNamePascal %>StatusValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-status/<%= moduleName %>-status.vo';
import { <%= moduleNamePascal %>TitleValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-title/<%= moduleName %>-title.vo';
import { <%= moduleNamePascal %>VersionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-version/<%= moduleName %>-version.vo';
import { IWriteFactory } from '@/shared/domain/interfaces/write-factory.interface';
import { <%= moduleNamePascal %>UuidValueObject } from '@/shared/domain/value-objects/identifiers/<%= moduleName %>-uuid/<%= moduleName %>-uuid.vo';
import { Injectable } from '@nestjs/common';

/**
 * Factory class responsible for creating <%= moduleNamePascal %>Aggregate entities.
 *
 * @remarks
 * This class uses value objects to encapsulate and validate <%= moduleName %> information.
 */
@Injectable()
export class <%= moduleNamePascal %>AggregateFactory
  implements IWriteFactory<<%= moduleNamePascal %>Aggregate, I<%= moduleNamePascal %>CreateDto>
{
  /**
   * Creates a new <%= moduleNamePascal %>Aggregate entity using the provided properties.
   *
   * @param data   - The <%= moduleName %> create data.
   * @param generateEvent - Whether to generate a creation event (default: true).
   * @returns {<%= moduleNamePascal %>Aggregate} - The created <%= moduleName %> aggregate entity.
   */
  public create(
    data: I<%= moduleNamePascal %>CreateDto,
    generateEvent: boolean = true,
  ): <%= moduleNamePascal %>Aggregate {
    return new <%= moduleNamePascal %>Aggregate(data, generateEvent);
  }

  /**
   * Creates a new <%= moduleNamePascal %>Aggregate entity from primitive data.
   *
   * @param data - The <%= moduleName %> primitive data.
   * @returns The created <%= moduleName %> aggregate entity.
   */
  public fromPrimitives(data: <%= moduleNamePascal %>Primitives): <%= moduleNamePascal %>Aggregate {
    return new <%= moduleNamePascal %>Aggregate({
      id: new <%= moduleNamePascal %>UuidValueObject(data.id),
      slug: new <%= moduleNamePascal %>SlugValueObject(data.slug),
      version: new <%= moduleNamePascal %>VersionValueObject(data.version),
      title: new <%= moduleNamePascal %>TitleValueObject(data.title),
      description: new <%= moduleNamePascal %>DescriptionValueObject(data.description),
      content: new <%= moduleNamePascal %>ContentValueObject(data.content),
      status: new <%= moduleNamePascal %>StatusValueObject(data.status),
      isActive: new <%= moduleNamePascal %>IsActiveValueObject(data.isActive),
    });
  }
}

