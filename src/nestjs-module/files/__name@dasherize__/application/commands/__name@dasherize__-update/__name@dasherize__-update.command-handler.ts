import { <%= moduleNamePascal %>UpdateCommand } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-update/<%= moduleName %>-update.command';
import { Assert<%= moduleNamePascal %>ExsistsService } from '@/llm-context/<%= moduleName %>/application/services/assert-<%= moduleName %>-exsits/assert-<%= moduleName %>-exsits.service';
import {
  <%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN,
  <%= moduleNamePascal %>WriteRepository,
} from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-write/<%= moduleName %>-write.repository';
import { Inject, Logger } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(<%= moduleNamePascal %>UpdateCommand)
export class <%= moduleNamePascal %>UpdateCommandHandler
  implements ICommandHandler<<%= moduleNamePascal %>UpdateCommand>
{
  private readonly logger = new Logger(<%= moduleNamePascal %>UpdateCommandHandler.name);

  constructor(
    @Inject(<%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN)
    private readonly <%= moduleNameCamel %>WriteRepository: <%= moduleNamePascal %>WriteRepository,
    private readonly eventBus: EventBus,
    private readonly assert<%= moduleNamePascal %>ExsistsService: Assert<%= moduleNamePascal %>ExsistsService,
  ) {}

  /**
   * Executes the <%= moduleName %> update command
   *
   * @param command - The command to execute
   * @returns The void
   */
  async execute(command: <%= moduleNamePascal %>UpdateCommand): Promise<void> {
    this.logger.log(`Executing update <%= moduleName %> command by id: ${command.id}`);

    // 01: Check if the <%= moduleName %> exists
    const existing<%= moduleNamePascal %> = await this.assert<%= moduleNamePascal %>ExsistsService.execute(
      command.id.value,
    );

    // 02: Update the <%= moduleName %>
    await existing<%= moduleNamePascal %>.update(command);

    // 04: Update the <%= moduleName %> from the repository
    await this.<%= moduleNameCamel %>WriteRepository.save(existing<%= moduleNamePascal %>);

    // 05: Publish the <%= moduleName %> updated event
    await this.eventBus.publishAll(existing<%= moduleNamePascal %>.getUncommittedEvents());
    await existing<%= moduleNamePascal %>.commit();
  }
}

