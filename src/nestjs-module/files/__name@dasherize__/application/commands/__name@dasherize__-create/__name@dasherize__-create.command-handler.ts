import { <%= moduleNamePascal %>CreateCommand } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-create/<%= moduleName %>-create.command';
import { <%= moduleNamePascal %>AggregateFactory } from '@/llm-context/<%= moduleName %>/domain/factories/<%= moduleName %>-aggregate/<%= moduleName %>-aggregate.factory';
import {
  <%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN,
  <%= moduleNamePascal %>WriteRepository,
} from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-write/<%= moduleName %>-write.repository';
import { Inject } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(<%= moduleNamePascal %>CreateCommand)
export class <%= moduleNamePascal %>CreateCommandHandler
  implements ICommandHandler<<%= moduleNamePascal %>CreateCommand>
{
  constructor(
    @Inject(<%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN)
    private readonly <%= moduleNameCamel %>WriteRepository: <%= moduleNamePascal %>WriteRepository,
    private readonly eventBus: EventBus,
    private readonly <%= moduleNameCamel %>AggregateFactory: <%= moduleNamePascal %>AggregateFactory,
  ) {}

  /**
   * Executes the <%= moduleName %> create command
   *
   * @param command - The command to execute
   * @returns The created <%= moduleName %> id
   */
  async execute(command: <%= moduleNamePascal %>CreateCommand): Promise<string> {
    // 01: Create the <%= moduleName %> entity
    const <%= moduleNameCamel %> = this.<%= moduleNameCamel %>AggregateFactory.create({
      ...command,
    });

    // 02: Save the <%= moduleName %> entity
    await this.<%= moduleNameCamel %>WriteRepository.save(<%= moduleNameCamel %>);

    // 03: Publish all events
    await this.eventBus.publishAll(<%= moduleNameCamel %>.getUncommittedEvents());
    await <%= moduleNameCamel %>.commit();

    // 04: Return the <%= moduleName %> id
    return <%= moduleNameCamel %>.id.value;
  }
}

