import { <%= moduleNamePascal %>ViewModelFactory } from '@/llm-context/<%= moduleName %>/domain/factories/<%= moduleName %>-plan-view-model/<%= moduleName %>-view-model.factory';
import {
  <%= moduleNameUpper %>_READ_REPOSITORY_TOKEN,
  <%= moduleNamePascal %>ReadRepository,
} from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-read/<%= moduleName %>-read.repository';
import { <%= moduleNamePascal %>CreatedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-created/<%= moduleName %>-created.event';
import { Inject, Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(<%= moduleNamePascal %>CreatedEvent)
export class <%= moduleNamePascal %>CreatedEventHandler
  implements IEventHandler<<%= moduleNamePascal %>CreatedEvent>
{
  private readonly logger = new Logger(<%= moduleNamePascal %>CreatedEventHandler.name);

  constructor(
    @Inject(<%= moduleNameUpper %>_READ_REPOSITORY_TOKEN)
    private readonly <%= moduleNameCamel %>ReadRepository: <%= moduleNamePascal %>ReadRepository,
    private readonly <%= moduleNameCamel %>ViewModelFactory: <%= moduleNamePascal %>ViewModelFactory,
  ) {}

  /**
   * Handles the <%= moduleNamePascal %>CreatedEvent event by creating a new <%= moduleName %> view model.
   *
   * @param event - The <%= moduleNamePascal %>CreatedEvent event to handle.
   */
  async handle(event: <%= moduleNamePascal %>CreatedEvent) {
    this.logger.log(`Handling <%= moduleName %> created event: ${event.aggregateId}`);

    // 01: Create the <%= moduleName %> view model
    const <%= moduleNameCamel %>CreatedViewModel = this.<%= moduleNameCamel %>ViewModelFactory.fromPrimitives(
      event.data,
    );

    // 02: Save the <%= moduleName %> view model
    await this.<%= moduleNameCamel %>ReadRepository.save(<%= moduleNameCamel %>CreatedViewModel);
  }
}

