import { <%= moduleNamePascal %>Aggregate } from '@/llm-context/<%= moduleName %>/domain/aggregates/<%= moduleName %>.aggregate';
import { <%= moduleNamePascal %>AggregateFactory } from '@/llm-context/<%= moduleName %>/domain/factories/<%= moduleName %>-aggregate/<%= moduleName %>-aggregate.factory';
import { <%= moduleNamePascal %>PrismaDto } from '@/llm-context/<%= moduleName %>/infrastructure/database/prisma/dtos/<%= moduleName %>-prisma.dto';
import { Injectable, Logger } from '@nestjs/common';
import { <%= moduleNamePascal %>StatusEnum } from '@prisma/client';

@Injectable()
export class <%= moduleNamePascal %>PrismaMapper {
  private readonly logger = new Logger(<%= moduleNamePascal %>PrismaMapper.name);

  constructor(
    private readonly <%= moduleNameCamel %>AggregateFactory: <%= moduleNamePascal %>AggregateFactory,
  ) {}

  /**
   * Converts a Prisma data to a <%= moduleName %> aggregate
   *
   * @param <%= moduleNameCamel %>Data - The Prisma data to convert
   * @returns The <%= moduleName %> aggregate
   */
  public toDomainEntity(<%= moduleNameCamel %>Data: <%= moduleNamePascal %>PrismaDto): <%= moduleNamePascal %>Aggregate {
    this.logger.log(
      `Converting Prisma data to domain entity with id ${<%= moduleNameCamel %>Data.id}`,
    );

    return this.<%= moduleNameCamel %>AggregateFactory.fromPrimitives({
      id: <%= moduleNameCamel %>Data.id,
      slug: <%= moduleNameCamel %>Data.slug,
      version: <%= moduleNameCamel %>Data.version,
      title: <%= moduleNameCamel %>Data.title,
      description: <%= moduleNameCamel %>Data.description,
      content: <%= moduleNameCamel %>Data.content,
      status: <%= moduleNameCamel %>Data.status,
      isActive: <%= moduleNameCamel %>Data.isActive,
    });
  }

  /**
   * Converts a <%= moduleName %> aggregate to a Prisma data
   *
   * @param <%= moduleNameCamel %> - The <%= moduleName %> aggregate to convert
   * @returns The Prisma data
   */
  public toPrismaData(<%= moduleNameCamel %>: <%= moduleNamePascal %>Aggregate): <%= moduleNamePascal %>PrismaDto {
    this.logger.log(
      `Converting domain entity with id ${<%= moduleNameCamel %>.id.value} to Prisma data`,
    );

    // Get primitives from aggregate
    const primitives = <%= moduleNameCamel %>.toPrimitives();

    return {
      id: primitives.id,
      slug: primitives.slug,
      version: primitives.version,
      title: primitives.title,
      description: primitives.description,
      content: primitives.content,
      status: primitives.status as <%= moduleNamePascal %>StatusEnum,
      isActive: primitives.isActive,
    };
  }
}

