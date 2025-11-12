# Kaizen

A schematic generator for creating NestJS modules with Domain-Driven Design (DDD) structure, CQRS pattern, and GraphQL support.

## Description

Kaizen is a schematic tool that helps you generate complete NestJS modules following strict DDD principles, CQRS pattern, and event-driven architecture. It creates a well-structured module with:

- **Application Layer**: Commands, Queries, Event Handlers, DTOs, Services, and Exceptions
- **Domain Layer**: Aggregates, Value Objects, Repositories (Read/Write separation), Factories, View Models, Primitives, and Enums
- **Infrastructure Layer**: Database implementations (MongoDB and Prisma) with mappers
- **Transport Layer**: GraphQL resolvers (Queries and Mutations), DTOs, and mappers

## Installation

```bash
pnpm install
```

## Building

```bash
pnpm run build
```

## Usage

### Global CLI Installation (Recommended)

Install Kaizen globally to use it like NestJS CLI:

```bash
# Install globally
pnpm add -g @jsisques/kaizen

# Or using npm
npm install -g @jsisques/kaizen
```

Then use it in any NestJS project:

```bash
# Generate a module in the current directory
kaizen generate nestjs-module users

# Or use the short alias
kaizen g nestjs-module users

# Generate a module in a specific path
kaizen g nestjs-module users --path=src/modules
```

### As a schematic in another project

1. Install the package:

```bash
pnpm add -D @jsisques/kaizen
```

2. Run the schematic:

```bash
# Generate a module in the current directory
pnpm schematics @jsisques/kaizen:nestjs-module users

# Generate a module in a specific path
pnpm schematics @jsisques/kaizen:nestjs-module users --path=src/modules
```

### Development

To test the schematic locally:

```bash
# Build the project
pnpm run build

# Link the package globally
pnpm link --global

# Now you can use kaizen command anywhere
kaizen g nestjs-module test-module
```

## Generated Structure

When you run the schematic with module name `users`, it will generate:

```
users/
├── users.module.ts
├── application/
│   ├── users.service.ts
│   ├── commands/
│   │   ├── users-create/
│   │   │   ├── users-create.command.ts
│   │   │   └── users-create.command-handler.ts
│   │   ├── users-update/
│   │   │   ├── users-update.command.ts
│   │   │   └── users-update.command-handler.ts
│   │   ├── users-delete/
│   │   │   ├── users-delete.command.ts
│   │   │   └── users-delete.command-handler.ts
│   │   ├── users-activate/
│   │   │   ├── users-activate.command.ts
│   │   │   └── users-activate.command-handler.ts
│   │   ├── users-draft/
│   │   │   ├── users-draft.command.ts
│   │   │   └── users-draft.command-handler.ts
│   │   ├── users-archive/
│   │   │   ├── users-archive.command.ts
│   │   │   └── users-archive.command-handler.ts
│   │   └── users-deprecate/
│   │       ├── users-deprecate.command.ts
│   │       └── users-deprecate.command-handler.ts
│   ├── queries/
│   │   ├── users-find-by-id/
│   │   │   ├── users-find-by-id.query.ts
│   │   │   └── users-find-by-id.query-handler.ts
│   │   ├── users-find-by-criteria/
│   │   │   ├── users-find-by-criteria.query.ts
│   │   │   └── users-find-by-criteria.query-handler.ts
│   │   └── users-find-view-model-by-id/
│   │       ├── users-find-view-model-by-id.query.ts
│   │       └── users-find-view-model-by-id.query-handler.ts
│   ├── event-handlers/
│   │   ├── users-created/
│   │   │   └── users-created.event-handler.ts
│   │   ├── users-updated/
│   │   │   └── users-updated.event-handler.ts
│   │   ├── users-deleted/
│   │   │   └── users-deleted.event-handler.ts
│   │   ├── users-activated/
│   │   │   └── users-activated.event-handler.ts
│   │   ├── users-drafted/
│   │   │   └── users-drafted.event-handler.ts
│   │   ├── users-archived/
│   │   │   └── users-archived.event-handler.ts
│   │   ├── users-deprecated/
│   │   │   └── users-deprecated.event-handler.ts
│   │   └── users-version-inncremented/
│   │       └── users-version-inncremented.event-handler.ts
│   ├── dtos/
│   │   ├── commands/
│   │   │   ├── users-create/
│   │   │   │   └── users-create-command.dto.ts
│   │   │   ├── users-update/
│   │   │   │   └── users-update-command.dto.ts
│   │   │   └── users-delete/
│   │   │       └── users-delete-command.dto.ts
│   │   └── queries/
│   │       ├── users-find-by-id/
│   │       │   └── users-find-by-id-query.dto.ts
│   │       └── users-find-by-criteria/
│   │           └── users-find-by-criteria-query.dto.ts
│   ├── services/
│   │   ├── assert-users-exsits/
│   │   │   └── assert-users-exsits.service.ts
│   │   └── assert-users-view-model-exsits/
│   │       └── assert-users-view-model-exsits.service.ts
│   └── exceptions/
│       └── users-not-found/
│           └── users-not-found.exception.ts
├── domain/
│   ├── aggregates/
│   │   └── users.aggregate.ts
│   ├── value-objects/
│   │   ├── users-content/
│   │   │   └── users-content.vo.ts
│   │   ├── users-description/
│   │   │   └── users-description.vo.ts
│   │   ├── users-is-active/
│   │   │   └── users-is-active.vo.ts
│   │   ├── users-slug/
│   │   │   └── users-slug.vo.ts
│   │   ├── users-status/
│   │   │   └── users-status.vo.ts
│   │   ├── users-title/
│   │   │   └── users-title.vo.ts
│   │   └── users-version/
│   │       └── users-version.vo.ts
│   ├── repositories/
│   │   ├── users-read/
│   │   │   └── users-read.repository.ts
│   │   └── users-write/
│   │       └── users-write.repository.ts
│   ├── factories/
│   │   ├── users-aggregate/
│   │   │   └── users-aggregate.factory.ts
│   │   └── users-view-model/
│   │       └── users-view-model.factory.ts
│   ├── view-models/
│   │   └── users.view-model.ts
│   ├── primitives/
│   │   └── users.primitives.ts
│   ├── enum/
│   │   └── users-status.enum.ts
│   └── dtos/
│       ├── entities/
│       │   ├── users-create/
│       │   │   └── users-create.dto.ts
│       │   ├── users-update/
│       │   │   └── users-update.dto.ts
│       │   └── users-delete/
│       │       └── users-delete.dto.ts
│       └── view-models/
│           ├── users-create-view-model/
│           │   └── users-create-view-model.dto.ts
│           ├── users-update-view-model/
│           │   └── users-update-view-model.dto.ts
│           └── users-delete-view-model/
│               └── users-delete-view-model.dto.ts
├── infrastructure/
│   └── database/
│       ├── mongodb/
│       │   ├── repositories/
│       │   │   └── users-mongodb.repository.ts
│       │   ├── mappers/
│       │   │   └── users-mongodb.mapper.ts
│       │   └── dtos/
│       │       └── users-mongodb.dto.ts
│       └── prisma/
│           ├── repositories/
│           │   └── users-prisma.repository.ts
│           ├── mappers/
│           │   └── users-prisma.mapper.ts
│           └── dtos/
│               └── users-prisma.dto.ts
└── transport/
    └── graphql/
        ├── resolvers/
        │   ├── users-queries.resolver.ts
        │   └── users-mutations.resolver.ts
        ├── dtos/
        │   ├── requests/
        │   │   ├── users-create.request.dto.ts
        │   │   ├── users-update.request.dto.ts
        │   │   ├── users-delete.request.dto.ts
        │   │   ├── users-find-by-id.request.dto.ts
        │   │   └── users-find-by-criteria.request.dto.ts
        │   └── responses/
        │       └── users.response.dto.ts
        └── mappers/
            └── users.mapper.ts
```

## Features

- ✅ **Complete CQRS implementation**: Commands, Queries, and Event Handlers
- ✅ **Strict DDD structure**: Application, Domain, Infrastructure, and Transport layers
- ✅ **Event-Driven Architecture**: Domain events for all state changes
- ✅ **GraphQL Support**: Query and Mutation resolvers with DTOs
- ✅ **Multiple Database Support**: MongoDB and Prisma implementations
- ✅ **Repository Pattern**: Separate read and write repositories
- ✅ **Value Objects**: Rich domain model with value objects
- ✅ **Aggregates**: Domain aggregates with business logic
- ✅ **View Models**: Separate read models for queries
- ✅ **Factories**: Aggregate and View Model factories
- ✅ **TypeScript support**: Fully typed with TypeScript
- ✅ **NestJS best practices**: Follows NestJS conventions and patterns

## Architecture Overview

### Application Layer

The application layer contains:

- **Commands**: Create, Update, Delete, Activate, Draft, Archive, Deprecate operations
- **Queries**: Find by ID, Find by Criteria, Find View Model by ID
- **Event Handlers**: Handle domain events (Created, Updated, Deleted, Activated, Drafted, Archived, Deprecated, Version Incremented)
- **DTOs**: Data Transfer Objects for commands and queries
- **Services**: Assertion services to validate entity and view model existence
- **Exceptions**: Domain-specific exceptions

### Domain Layer

The domain layer contains:

- **Aggregates**: Root entities with business logic and domain events
- **Value Objects**: Immutable domain concepts (Title, Description, Content, Slug, Status, Version, IsActive)
- **Repositories**: Interfaces for read and write operations (CQRS separation)
- **Factories**: Create aggregates and view models
- **View Models**: Read-optimized models for queries
- **Primitives**: Domain primitives and types
- **Enums**: Domain enumerations (e.g., Status)
- **DTOs**: Domain DTOs for entities and view models

### Infrastructure Layer

The infrastructure layer contains:

- **Database Implementations**:
  - MongoDB repository, mapper, and DTO
  - Prisma repository, mapper, and DTO
- **Mappers**: Convert between domain and persistence models

### Transport Layer

The transport layer contains:

- **GraphQL Resolvers**: Query and Mutation resolvers
- **GraphQL DTOs**: Request and response DTOs for GraphQL
- **GraphQL Mappers**: Convert between domain and GraphQL models

## Next Steps

After generating a module, you should:

1. **Update Value Objects**: Customize value objects in `domain/value-objects/` to match your domain requirements
2. **Update Aggregate**: Add business logic and domain methods to `domain/aggregates/<module-name>.aggregate.ts`
3. **Update Domain DTOs**: Modify DTOs in `domain/dtos/` to match your entity structure
4. **Update Application DTOs**: Add validation and properties to command/query DTOs in `application/dtos/`
5. **Implement Repositories**: Customize the MongoDB and Prisma repository implementations in `infrastructure/database/`
6. **Update GraphQL Schema**: Modify GraphQL DTOs and resolvers in `transport/graphql/` to match your API requirements
7. **Add Business Logic**: Implement domain methods in the aggregate
8. **Add Validation**: Add class-validator decorators to DTOs
9. **Configure Module**: Import the module in your main `app.module.ts`
10. **Create Domain Events**: Ensure domain events are created in your shared module (the schematic references events in `@/shared/domain/events/`)

## Requirements

- Node.js >= 18
- pnpm >= 8
- NestJS project with:
  - CQRS module installed (`@nestjs/cqrs`)
  - GraphQL module installed (`@nestjs/graphql`)
  - Prisma or MongoDB setup (depending on your database choice)

## License

MIT
