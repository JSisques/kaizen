import { <%= moduleNamePascal %>ActivateCommandHandler } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-activate/<%= moduleName %>-activate.command-handler';
import { <%= moduleNamePascal %>ArchiveCommandHandler } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-archive/<%= moduleName %>-archive.command-handler';
import { <%= moduleNamePascal %>CreateCommandHandler } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-create/<%= moduleName %>-create.command-handler';
import { <%= moduleNamePascal %>DeleteCommandHandler } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-delete/<%= moduleName %>-delete.command-handler';
import { <%= moduleNamePascal %>DeprecateCommandHandler } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-deprecate/<%= moduleName %>-deprecate.command-handler';
import { <%= moduleNamePascal %>DraftCommandHandler } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-draft/<%= moduleName %>-draft.command-handler';
import { <%= moduleNamePascal %>UpdateCommandHandler } from '@/llm-context/<%= moduleName %>/application/commands/<%= moduleName %>-update/<%= moduleName %>-update.command-handler';
import { <%= moduleNamePascal %>ActivatedEventHandler } from '@/llm-context/<%= moduleName %>/application/event-handlers/<%= moduleName %>-activated/<%= moduleName %>-activated.event-handler';
import { <%= moduleNamePascal %>ArchivedEventHandler } from '@/llm-context/<%= moduleName %>/application/event-handlers/<%= moduleName %>-archived/<%= moduleName %>-archived.event-handler';
import { <%= moduleNamePascal %>CreatedEventHandler } from '@/llm-context/<%= moduleName %>/application/event-handlers/<%= moduleName %>-created/<%= moduleName %>-created.event-handler';
import { <%= moduleNamePascal %>DeletedEventHandler } from '@/llm-context/<%= moduleName %>/application/event-handlers/<%= moduleName %>-deleted/<%= moduleName %>-deleted.event-handler';
import { <%= moduleNamePascal %>DeprecatedEventHandler } from '@/llm-context/<%= moduleName %>/application/event-handlers/<%= moduleName %>-deprecated/<%= moduleName %>-deprecated.event-handler';
import { <%= moduleNamePascal %>DraftedEventHandler } from '@/llm-context/<%= moduleName %>/application/event-handlers/<%= moduleName %>-drafted/<%= moduleName %>-drafted.event-handler';
import { <%= moduleNamePascal %>UpdatedEventHandler } from '@/llm-context/<%= moduleName %>/application/event-handlers/<%= moduleName %>-updated/<%= moduleName %>-updated.event-handler';
import { <%= moduleNamePascal %>VersionIncrementedEventHandler } from '@/llm-context/<%= moduleName %>/application/event-handlers/<%= moduleName %>-version-inncremented/<%= moduleName %>-version-inncremented.event-handler';
import { Find<%= moduleNamePascal %>sByCriteriaQueryHandler } from '@/llm-context/<%= moduleName %>/application/queries/<%= moduleName %>-find-by-criteria/<%= moduleName %>-find-by-criteria.query-handler';
import { Find<%= moduleNamePascal %>ViewModelByIdQueryHandler } from '@/llm-context/<%= moduleName %>/application/queries/<%= moduleName %>-find-view-model-by-id/<%= moduleName %>-find-view-model-by-id.query-handler';
import { Assert<%= moduleNamePascal %>ExsistsService } from '@/llm-context/<%= moduleName %>/application/services/assert-<%= moduleName %>-exsits/assert-<%= moduleName %>-exsits.service';
import { Assert<%= moduleNamePascal %>ViewModelExsistsService } from '@/llm-context/<%= moduleName %>/application/services/assert-<%= moduleName %>-view-model-exsits/assert-<%= moduleName %>-view-model-exsits.service';
import { <%= moduleNamePascal %>AggregateFactory } from '@/llm-context/<%= moduleName %>/domain/factories/<%= moduleName %>-aggregate/<%= moduleName %>-aggregate.factory';
import { <%= moduleNamePascal %>ViewModelFactory } from '@/llm-context/<%= moduleName %>/domain/factories/<%= moduleName %>-plan-view-model/<%= moduleName %>-view-model.factory';
import { <%= moduleNameUpper %>_READ_REPOSITORY_TOKEN } from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-read/<%= moduleName %>-read.repository';
import { <%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN } from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-write/<%= moduleName %>-write.repository';
import { <%= moduleNamePascal %>MongoDBMapper } from '@/llm-context/<%= moduleName %>/infrastructure/database/mongodb/mappers/<%= moduleName %>-mongodb.mapper';
import { <%= moduleNamePascal %>MongoRepository } from '@/llm-context/<%= moduleName %>/infrastructure/database/mongodb/repositories/<%= moduleName %>-mongodb.repository';
import { <%= moduleNamePascal %>PrismaMapper } from '@/llm-context/<%= moduleName %>/infrastructure/database/prisma/mappers/<%= moduleName %>-prisma.mapper';
import { <%= moduleNamePascal %>PrismaRepository } from '@/llm-context/<%= moduleName %>/infrastructure/database/prisma/repositories/<%= moduleName %>-prisma.repository';
import { <%= moduleNamePascal %>GraphQLMapper } from '@/llm-context/<%= moduleName %>/transport/graphql/mappers/<%= moduleName %>.mapper';
import { <%= moduleNamePascal %>MutationsResolver } from '@/llm-context/<%= moduleName %>/transport/graphql/resolvers/<%= moduleName %>-mutations.resolver';
import { <%= moduleNamePascal %>QueryResolver } from '@/llm-context/<%= moduleName %>/transport/graphql/resolvers/<%= moduleName %>-queries.resolver';
import { SharedModule } from '@/shared/shared.module';
import { Module } from '@nestjs/common';

const RESOLVERS = [<%= moduleNamePascal %>QueryResolver, <%= moduleNamePascal %>MutationsResolver];

const SERVICES = [
  Assert<%= moduleNamePascal %>ExsistsService,
  Assert<%= moduleNamePascal %>ViewModelExsistsService,
];

const QUERY_HANDLERS = [
  Find<%= moduleNamePascal %>sByCriteriaQueryHandler,
  Find<%= moduleNamePascal %>ViewModelByIdQueryHandler,
];

const COMMAND_HANDLERS = [
  <%= moduleNamePascal %>CreateCommandHandler,
  <%= moduleNamePascal %>UpdateCommandHandler,
  <%= moduleNamePascal %>DeleteCommandHandler,
  <%= moduleNamePascal %>ActivateCommandHandler,
  <%= moduleNamePascal %>DraftCommandHandler,
  <%= moduleNamePascal %>ArchiveCommandHandler,
  <%= moduleNamePascal %>DeprecateCommandHandler,
];

const EVENT_HANDLERS = [
  <%= moduleNamePascal %>CreatedEventHandler,
  <%= moduleNamePascal %>UpdatedEventHandler,
  <%= moduleNamePascal %>DeletedEventHandler,
  <%= moduleNamePascal %>ActivatedEventHandler,
  <%= moduleNamePascal %>DraftedEventHandler,
  <%= moduleNamePascal %>ArchivedEventHandler,
  <%= moduleNamePascal %>DeprecatedEventHandler,
  <%= moduleNamePascal %>VersionIncrementedEventHandler,
];

const FACTORIES = [<%= moduleNamePascal %>AggregateFactory, <%= moduleNamePascal %>ViewModelFactory];

const MAPPERS = [<%= moduleNamePascal %>PrismaMapper, <%= moduleNamePascal %>MongoDBMapper, <%= moduleNamePascal %>GraphQLMapper];

const REPOSITORIES = [
  {
    provide: <%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN,
    useClass: <%= moduleNamePascal %>PrismaRepository,
  },
  {
    provide: <%= moduleNameUpper %>_READ_REPOSITORY_TOKEN,
    useClass: <%= moduleNamePascal %>MongoRepository,
  },
];

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [
    ...RESOLVERS,
    ...SERVICES,
    ...QUERY_HANDLERS,
    ...COMMAND_HANDLERS,
    ...EVENT_HANDLERS,
    ...REPOSITORIES,
    ...FACTORIES,
    ...MAPPERS,
  ],
})
export class <%= moduleNamePascal %>Module {}

