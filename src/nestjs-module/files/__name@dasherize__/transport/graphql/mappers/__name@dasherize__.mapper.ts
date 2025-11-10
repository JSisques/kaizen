import { <%= moduleNamePascal %>ViewModel } from '@/llm-context/<%= moduleName %>/domain/view-models/<%= moduleName %>.view-model';
import {
  Paginated<%= moduleNamePascal %>ResultDto,
  <%= moduleNamePascal %>ResponseDto,
} from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/responses/<%= moduleName %>.response.dto';
import { PaginatedResult } from '@/shared/domain/entities/paginated-result.entity';
import { Injectable, Logger } from '@nestjs/common';
import { <%= moduleNamePascal %>StatusEnum } from '@prisma/client';

@Injectable()
export class <%= moduleNamePascal %>GraphQLMapper {
  private readonly logger = new Logger(<%= moduleNamePascal %>GraphQLMapper.name);

  toResponseDto(<%= moduleNameCamel %>: <%= moduleNamePascal %>ViewModel): <%= moduleNamePascal %>ResponseDto {
    this.logger.log(`Mapping <%= moduleName %> view model to response dto: ${<%= moduleNameCamel %>.id}`);
    return {
      id: <%= moduleNameCamel %>.id,
      slug: <%= moduleNameCamel %>.slug,
      version: <%= moduleNameCamel %>.version,
      title: <%= moduleNameCamel %>.title,
      description: <%= moduleNameCamel %>.description,
      content: <%= moduleNameCamel %>.content,
      status: <%= moduleNameCamel %>.status as <%= moduleNamePascal %>StatusEnum,
      isActive: <%= moduleNameCamel %>.isActive,
      createdAt: <%= moduleNameCamel %>.createdAt,
      updatedAt: <%= moduleNameCamel %>.updatedAt,
    };
  }

  toPaginatedResponseDto(
    paginatedResult: PaginatedResult<<%= moduleNamePascal %>ViewModel>,
  ): Paginated<%= moduleNamePascal %>ResultDto {
    return {
      items: paginatedResult.items.map((<%= moduleNameCamel %>) => this.toResponseDto(<%= moduleNameCamel %>)),
      total: paginatedResult.total,
      page: paginatedResult.page,
      perPage: paginatedResult.perPage,
      totalPages: paginatedResult.totalPages,
    };
  }
}

