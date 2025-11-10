import { <%= moduleNamePascal %>DeleteCommand } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-delete/<%= moduleName %>-delete.command';
import { Assert<%= moduleNamePascal %>ExsistsService } from '@/llm-context/<%= moduleName %>/application/services/assert-<%= moduleName %>-exsits/assert-<%= moduleName %>-exsits.service';
import {
  <%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN,
  <%= moduleNamePascal %>WriteRepository,
} from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-write/<%= moduleName %>-write.repository';
import { Inject, Logger } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(<%= moduleNamePascal %>DeleteCommand)
export class <%= moduleNamePascal %>DeleteCommandHandler
  implements ICommandHandler<<%= moduleNamePascal %>DeleteCommand>
{
  private readonly logger = new Logger(<%= moduleNamePascal %>DeleteCommandHandler.name);

  constructor(
    @Inject(<%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN)
    private readonly <%= moduleNameCamel %>WriteRepository: <%= moduleNamePascal %>WriteRepository,
    private readonly eventBus: EventBus,
    private readonly assert<%= moduleNamePascal %>ExsistsService: Assert<%= moduleNamePascal %>ExsistsService,
  ) {}

  /**
   * Executes the <%= moduleName %> delete command
   *
   * @param command - The command to execute
   * @returns The void
   */
  async execute(command: <%= moduleNamePascal %>DeleteCommand): Promise<void> {
    this.logger.log(`Executing delete <%= moduleName %> command by id: ${command.id}`);

    // 01: Check if the <%= moduleName %> exists
    const existing<%= moduleNamePascal %> = await this.assert<%= moduleNamePascal %>ExsistsService.execute(
      command.id.value,
    );

    // 02: Delete the <%= moduleName %>
    await existing<%= moduleNamePascal %>.delete();

    // 04: Delete the <%= moduleName %> from the repository
    await this.<%= moduleNameCamel %>WriteRepository.delete(command.id.value);

    // 05: Publish the <%= moduleName %> deleted event
    await this.eventBus.publishAll(existing<%= moduleNamePascal %>.getUncommittedEvents());
    await existing<%= moduleNamePascal %>.commit();
  }
}

