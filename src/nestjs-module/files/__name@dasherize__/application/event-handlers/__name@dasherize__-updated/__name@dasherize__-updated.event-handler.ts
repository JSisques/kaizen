import { Assert<%= moduleNamePascal %>ViewModelExsistsService } from '@/llm-context/<%= moduleName %>/application/services/assert-<%= moduleName %>-view-model-exsits/assert-<%= moduleName %>-view-model-exsits.service';
import {
  <%= moduleNameUpper %>_READ_REPOSITORY_TOKEN,
  <%= moduleNamePascal %>ReadRepository,
} from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-read/<%= moduleName %>-read.repository';
import { <%= moduleNamePascal %>UpdatedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-updated/<%= moduleName %>-updated.event';
import { Inject, Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(<%= moduleNamePascal %>UpdatedEvent)
export class <%= moduleNamePascal %>UpdatedEventHandler
  implements IEventHandler<<%= moduleNamePascal %>UpdatedEvent>
{
  private readonly logger = new Logger(<%= moduleNamePascal %>UpdatedEventHandler.name);

  constructor(
    @Inject(<%= moduleNameUpper %>_READ_REPOSITORY_TOKEN)
    private readonly <%= moduleNameCamel %>ReadRepository: <%= moduleNamePascal %>ReadRepository,
    private readonly assert<%= moduleNamePascal %>ViewModelExsistsService: Assert<%= moduleNamePascal %>ViewModelExsistsService,
  ) {}

  /**
   * Handles the <%= moduleNamePascal %>UpdatedEvent event by updating the existing <%= moduleName %> view model.
   *
   * @param event - The <%= moduleNamePascal %>UpdatedEvent event to handle.
   */
  async handle(event: <%= moduleNamePascal %>UpdatedEvent) {
    this.logger.log(`Handling <%= moduleName %> updated event: ${event.aggregateId}`);

    // 01: Assert the <%= moduleName %> view model exists
    const existing<%= moduleNamePascal %>ViewModel =
      await this.assert<%= moduleNamePascal %>ViewModelExsistsService.execute(event.aggregateId);

    // 02: Update the existing view model with new data
    existing<%= moduleNamePascal %>ViewModel.update(event.data);

    // 03: Save the updated <%= moduleName %> view model
    await this.<%= moduleNameCamel %>ReadRepository.save(existing<%= moduleNamePascal %>ViewModel);
  }
}

