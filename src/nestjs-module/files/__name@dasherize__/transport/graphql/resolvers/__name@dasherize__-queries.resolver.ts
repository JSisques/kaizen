import { JwtAuthGuard } from '@/auth-context/auth/infrastructure/auth/jwt-auth.guard';
import { Roles } from '@/auth-context/auth/infrastructure/decorators/roles/roles.decorator';
import { RolesGuard } from '@/auth-context/auth/infrastructure/guards/roles.guard';
import { Find<%= moduleNamePascal %>sByCriteriaQuery } from '@/llm-context/<%= moduleName %>/application/queries/<%= moduleName %>-find-by-criteria/<%= moduleName %>-find-by-criteria.query';
import { Find<%= moduleNamePascal %>ViewModelByIdQuery } from '@/llm-context/<%= moduleName %>/application/queries/<%= moduleName %>-find-view-model-by-id/<%= moduleName %>-find-view-model-by-id.query';
import { <%= moduleNamePascal %>FindByCriteriaRequestDto } from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/requests/<%= moduleName %>-find-by-criteria.request.dto';
import { <%= moduleNamePascal %>FindByIdRequestDto } from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/requests/<%= moduleName %>-find-by-id.request.dto';
import {
  Paginated<%= moduleNamePascal %>ResultDto,
  <%= moduleNamePascal %>ResponseDto,
} from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/responses/<%= moduleName %>.response.dto';
import { <%= moduleNamePascal %>GraphQLMapper } from '@/llm-context/<%= moduleName %>/transport/graphql/mappers/<%= moduleName %>.mapper';
import { Criteria } from '@/shared/domain/entities/criteria';
import { Logger, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserRoleEnum } from '@prisma/client';

@Resolver()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRoleEnum.ADMIN)
export class <%= moduleNamePascal %>QueryResolver {
  private readonly logger = new Logger(<%= moduleNamePascal %>QueryResolver.name);
  constructor(
    private readonly queryBus: QueryBus,
    private readonly <%= moduleNameCamel %>GraphQLMapper: <%= moduleNamePascal %>GraphQLMapper,
  ) {}

  /**
   * Finds <%= moduleName %>s that satisfy specified criteria such as filtering, sorting, and pagination.
   *
   * @param {<%= moduleNamePascal %>FindByCriteriaRequestDto} [input] - Optional input parameters containing filters, sorts, and pagination settings.
   * @returns {Promise<Paginated<%= moduleNamePascal %>ResultDto>} A promise resolving to paginated results of <%= moduleName %>s matching the provided criteria.
   */
  @Query(() => Paginated<%= moduleNamePascal %>ResultDto)
  async <%= moduleNameCamel %>FindByCriteria(
    @Args('input', { nullable: true })
    input?: <%= moduleNamePascal %>FindByCriteriaRequestDto,
  ): Promise<Paginated<%= moduleNamePascal %>ResultDto> {
    this.logger.log(`Finding <%= moduleName %>s with input: ${JSON.stringify(input)}`);

    // 01: Convert DTO to domain Criteria
    const criteria = new Criteria(
      input?.filters,
      input?.sorts,
      input?.pagination,
    );

    // 02: Execute query
    const result = await this.queryBus.execute(
      new Find<%= moduleNamePascal %>sByCriteriaQuery({ criteria }),
    );

    // 03: Convert to response DTO
    return this.<%= moduleNameCamel %>GraphQLMapper.toPaginatedResponseDto(result);
  }

  /**
   * Finds a <%= moduleName %> by its ID.
   *
   * @param {<%= moduleNamePascal %>FindByIdRequestDto} input - The information containing the ID of the <%= moduleName %> to be found.
   * @returns {Promise<<%= moduleNamePascal %>ResponseDto>} The <%= moduleName %> matching the provided ID.
   */
  @Query(() => <%= moduleNamePascal %>ResponseDto)
  async <%= moduleNameCamel %>FindById(
    @Args('input') input: <%= moduleNamePascal %>FindByIdRequestDto,
  ): Promise<<%= moduleNamePascal %>ResponseDto> {
    this.logger.log(
      `Finding <%= moduleName %> by id with input: ${JSON.stringify(input)}`,
    );

    // 01: Execute query
    const result = await this.queryBus.execute(
      new Find<%= moduleNamePascal %>ViewModelByIdQuery({ id: input.id }),
    );

    // 02: Convert to response DTO
    return this.<%= moduleNameCamel %>GraphQLMapper.toResponseDto(result);
  }
}

