import {
  <%= moduleNameUpper %>_READ_REPOSITORY_TOKEN,
  <%= moduleNamePascal %>ReadRepository,
} from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-read/<%= moduleName %>-read.repository';
import { <%= moduleNamePascal %>DeletedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-deleted/<%= moduleName %>-deleted.event';
import { Inject, Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(<%= moduleNamePascal %>DeletedEvent)
export class <%= moduleNamePascal %>DeletedEventHandler
  implements IEventHandler<<%= moduleNamePascal %>DeletedEvent>
{
  private readonly logger = new Logger(<%= moduleNamePascal %>DeletedEventHandler.name);

  constructor(
    @Inject(<%= moduleNameUpper %>_READ_REPOSITORY_TOKEN)
    private readonly <%= moduleNameCamel %>ReadRepository: <%= moduleNamePascal %>ReadRepository,
  ) {}

  /**
   * Handles the <%= moduleNamePascal %>DeletedEvent event by deleting the <%= moduleName %> view model.
   *
   * @param event - The <%= moduleNamePascal %>DeletedEvent event to handle.
   */
  async handle(event: <%= moduleNamePascal %>DeletedEvent) {
    this.logger.log(`Handling <%= moduleName %> deleted event: ${event.aggregateId}`);

    // 01: Delete the <%= moduleName %> view model
    await this.<%= moduleNameCamel %>ReadRepository.delete(event.aggregateId);
  }
}

