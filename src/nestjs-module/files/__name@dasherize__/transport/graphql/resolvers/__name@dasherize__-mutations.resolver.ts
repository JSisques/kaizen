import { JwtAuthGuard } from '@/auth-context/auth/infrastructure/auth/jwt-auth.guard';
import { Roles } from '@/auth-context/auth/infrastructure/decorators/roles/roles.decorator';
import { RolesGuard } from '@/auth-context/auth/infrastructure/guards/roles.guard';
import { <%= moduleNamePascal %>ActivateCommand } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-activate/<%= moduleName %>-activate.command';
import { <%= moduleNamePascal %>ArchiveCommand } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-archive/<%= moduleName %>-archive.command';
import { <%= moduleNamePascal %>CreateCommand } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-create/<%= moduleName %>-create.command';
import { <%= moduleNamePascal %>DeleteCommand } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-delete/<%= moduleName %>-delete.command';
import { <%= moduleNamePascal %>DeprecateCommand } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-deprecate/<%= moduleName %>-deprecate.command';
import { <%= moduleNamePascal %>DraftCommand } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-draft/<%= moduleName %>-draft.command';
import { <%= moduleNamePascal %>UpdateCommand } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-update/<%= moduleName %>-update.command';
import { <%= moduleNamePascal %>ActivateRequestDto } from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/requests/<%= moduleName %>-activate.request.dto';
import { <%= moduleNamePascal %>ArchiveRequestDto } from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/requests/<%= moduleName %>-archive.request.dto';
import { <%= moduleNamePascal %>CreateRequestDto } from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/requests/<%= moduleName %>-create.request.dto';
import { <%= moduleNamePascal %>DeleteRequestDto } from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/requests/<%= moduleName %>-delete.request.dto';
import { <%= moduleNamePascal %>DeprecateRequestDto } from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/requests/<%= moduleName %>-deprecate.request.dto';
import { <%= moduleNamePascal %>DraftRequestDto } from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/requests/<%= moduleName %>-draft.request.dto';
import { <%= moduleNamePascal %>UpdateRequestDto } from '@/llm-context/<%= moduleName %>/transport/graphql/dtos/requests/<%= moduleName %>-update.request.dto';
import { MutationResponseDto } from '@/shared/transport/graphql/dtos/success-response.dto';
import { MutationResponseGraphQLMapper } from '@/shared/transport/graphql/mappers/mutation-response.mapper';
import { Logger, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserRoleEnum } from '@prisma/client';

@Resolver()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRoleEnum.ADMIN)
export class <%= moduleNamePascal %>MutationsResolver {
  private readonly logger = new Logger(<%= moduleNamePascal %>MutationsResolver.name);

  constructor(
    private readonly commandBus: CommandBus,
    private readonly mutationResponseGraphQLMapper: MutationResponseGraphQLMapper,
  ) {}

  /**
   * Creates a new <%= moduleName %> with the provided input data.
   *
   * @param {<%= moduleNamePascal %>CreateRequestDto} input - The information required to create a new <%= moduleName %>.
   * @returns {Promise<MutationResponseDto>} The result indicating whether the <%= moduleName %> was created successfully, a message, and the ID of the created <%= moduleName %>.
   */
  @Mutation(() => MutationResponseDto)
  async <%= moduleNameCamel %>Create(
    @Args('input') input: <%= moduleNamePascal %>CreateRequestDto,
  ): Promise<MutationResponseDto> {
    this.logger.log(`Creating <%= moduleName %> with input: ${JSON.stringify(input)}`);

    // 01: Send the command to the command bus
    const created<%= moduleNamePascal %>Id = await this.commandBus.execute(
      new <%= moduleNamePascal %>CreateCommand(input),
    );

    // 02: Return success response
    return this.mutationResponseGraphQLMapper.toResponseDto({
      success: true,
      message: '<%= moduleNamePascal %> created successfully',
      id: created<%= moduleNamePascal %>Id,
    });
  }

  /**
   * Updates an existing <%= moduleName %> with the provided input data.
   *
   * @param {<%= moduleNamePascal %>UpdateRequestDto} input - The update information for the <%= moduleName %>, including the <%= moduleName %>'s ID.
   * @returns {Promise<MutationResponseDto>} The result indicating whether the update was successful, a message, and the ID of the updated <%= moduleName %>.
   */
  @Mutation(() => MutationResponseDto)
  async <%= moduleNameCamel %>Update(
    @Args('input') input: <%= moduleNamePascal %>UpdateRequestDto,
  ): Promise<MutationResponseDto> {
    this.logger.log(`Updating <%= moduleName %> with input: ${JSON.stringify(input)}`);

    // 01: Send the command to the command bus
    await this.commandBus.execute(
      new <%= moduleNamePascal %>UpdateCommand({
        id: input.id,
        title: input.title,
        description: input.description,
        content: input.content,
      }),
    );

    // 02: Return success response
    return this.mutationResponseGraphQLMapper.toResponseDto({
      success: true,
      message: '<%= moduleNamePascal %> updated successfully',
      id: input.id,
    });
  }

  /**
   * Deletes an existing <%= moduleName %> based on the provided <%= moduleName %> ID.
   *
   * @param {<%= moduleNamePascal %>DeleteRequestDto} input - The information containing the ID of the <%= moduleName %> to be deleted.
   * @returns {Promise<MutationResponseDto>} The result indicating whether the deletion was successful, a message, and the ID of the deleted <%= moduleName %>.
   */
  @Mutation(() => MutationResponseDto)
  async <%= moduleNameCamel %>Delete(
    @Args('input') input: <%= moduleNamePascal %>DeleteRequestDto,
  ): Promise<MutationResponseDto> {
    this.logger.log(`Deleting <%= moduleName %> with input: ${JSON.stringify(input)}`);

    // 01: Send the command to the command bus
    await this.commandBus.execute(new <%= moduleNamePascal %>DeleteCommand({ id: input.id }));

    // 02: Return success response
    return this.mutationResponseGraphQLMapper.toResponseDto({
      success: true,
      message: '<%= moduleNamePascal %> deleted successfully',
      id: input.id,
    });
  }

  /**
   * Activates an existing <%= moduleName %> based on the provided <%= moduleName %> ID.
   *
   * @param {<%= moduleNamePascal %>ActivateRequestDto} input - The information containing the ID of the <%= moduleName %> to be activated.
   * @returns {Promise<MutationResponseDto>} The result indicating whether the activation was successful, a message, and the ID of the activated <%= moduleName %>.
   */
  @Mutation(() => MutationResponseDto)
  async <%= moduleNameCamel %>Activate(
    @Args('input') input: <%= moduleNamePascal %>ActivateRequestDto,
  ): Promise<MutationResponseDto> {
    this.logger.log(`Activating <%= moduleName %> with input: ${JSON.stringify(input)}`);

    // 01: Send the command to the command bus
    await this.commandBus.execute(new <%= moduleNamePascal %>ActivateCommand({ id: input.id }));

    // 02: Return success response
    return this.mutationResponseGraphQLMapper.toResponseDto({
      success: true,
      message: '<%= moduleNamePascal %> activated successfully',
      id: input.id,
    });
  }

  /**
   * Drafts an existing <%= moduleName %> based on the provided <%= moduleName %> ID.
   *
   * @param {<%= moduleNamePascal %>DraftRequestDto} input - The information containing the ID of the <%= moduleName %> to be drafted.
   * @returns {Promise<MutationResponseDto>} The result indicating whether the drafting was successful, a message, and the ID of the drafted <%= moduleName %>.
   */
  @Mutation(() => MutationResponseDto)
  async <%= moduleNameCamel %>Draft(
    @Args('input') input: <%= moduleNamePascal %>DraftRequestDto,
  ): Promise<MutationResponseDto> {
    this.logger.log(`Drafting <%= moduleName %> with input: ${JSON.stringify(input)}`);

    // 01: Send the command to the command bus
    await this.commandBus.execute(new <%= moduleNamePascal %>DraftCommand({ id: input.id }));

    // 02: Return success response
    return this.mutationResponseGraphQLMapper.toResponseDto({
      success: true,
      message: '<%= moduleNamePascal %> drafted successfully',
      id: input.id,
    });
  }

  /**
   * Archives an existing <%= moduleName %> based on the provided <%= moduleName %> ID.
   *
   * @param {<%= moduleNamePascal %>ArchiveRequestDto} input - The information containing the ID of the <%= moduleName %> to be archived.
   * @returns {Promise<MutationResponseDto>} The result indicating whether the archiving was successful, a message, and the ID of the archived <%= moduleName %>.
   */
  @Mutation(() => MutationResponseDto)
  async <%= moduleNameCamel %>Archive(
    @Args('input') input: <%= moduleNamePascal %>ArchiveRequestDto,
  ): Promise<MutationResponseDto> {
    this.logger.log(`Archiving <%= moduleName %> with input: ${JSON.stringify(input)}`);

    // 01: Send the command to the command bus
    await this.commandBus.execute(new <%= moduleNamePascal %>ArchiveCommand({ id: input.id }));
    // 02: Return success response
    return this.mutationResponseGraphQLMapper.toResponseDto({
      success: true,
      message: '<%= moduleNamePascal %> archived successfully',
      id: input.id,
    });
  }

  /**
   * Deprecates an existing <%= moduleName %> based on the provided <%= moduleName %> ID.
   *
   * @param {<%= moduleNamePascal %>DeprecateRequestDto} input - The information containing the ID of the <%= moduleName %> to be deprecated.
   * @returns {Promise<MutationResponseDto>} The result indicating whether the deprecation was successful, a message, and the ID of the deprecated <%= moduleName %>.
   */
  @Mutation(() => MutationResponseDto)
  async <%= moduleNameCamel %>Deprecate(
    @Args('input') input: <%= moduleNamePascal %>DeprecateRequestDto,
  ): Promise<MutationResponseDto> {
    this.logger.log(`Deprecating <%= moduleName %> with input: ${JSON.stringify(input)}`);

    // 01: Send the command to the command bus
    await this.commandBus.execute(new <%= moduleNamePascal %>DeprecateCommand({ id: input.id }));

    // 02: Return success response
    return this.mutationResponseGraphQLMapper.toResponseDto({
      success: true,
      message: '<%= moduleNamePascal %> deprecated successfully',
      id: input.id,
    });
  }
}

