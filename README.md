# Kaizen

A schematic generator for creating NestJS modules with Domain-Driven Design (DDD) structure and CQRS pattern.

## Description

Kaizen is a schematic tool that helps you generate complete NestJS modules following DDD principles and CQRS pattern. It creates a well-structured module with:

- **Application Layer**: Commands, Queries, Handlers, DTOs, and Services
- **Domain Layer**: Entities and Repository interfaces
- **Infrastructure Layer**: Repository implementations
- **Presentation Layer**: Controllers with full CRUD operations

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
├── users.controller.ts
├── application/
│   ├── users.service.ts
│   ├── commands/
│   │   ├── create-users.command.ts
│   │   ├── update-users.command.ts
│   │   └── delete-users.command.ts
│   ├── queries/
│   │   ├── get-users-by-id.query.ts
│   │   └── get-all-users.query.ts
│   ├── handlers/
│   │   ├── create-users.handler.ts
│   │   ├── update-users.handler.ts
│   │   ├── delete-users.handler.ts
│   │   ├── get-users-by-id.handler.ts
│   │   └── get-all-users.handler.ts
│   └── dto/
│       ├── create-users.dto.ts
│       └── update-users.dto.ts
├── domain/
│   ├── entities/
│   │   └── users.entity.ts
│   └── repositories/
│       └── users.repository.ts
└── infrastructure/
    └── repositories/
        └── users.repository.ts
```

## Features

- ✅ Complete CRUD operations
- ✅ CQRS pattern implementation
- ✅ DDD structure (Application, Domain, Infrastructure layers)
- ✅ TypeScript support
- ✅ NestJS best practices
- ✅ Command and Query handlers
- ✅ Repository pattern
- ✅ DTOs for validation

## Next Steps

After generating a module, you should:

1. **Update the Entity**: Add domain properties to `domain/entities/<module-name>.entity.ts`
2. **Update DTOs**: Add validation and properties to `application/dto/create-<module-name>.dto.ts`
3. **Implement Repository**: Replace the in-memory implementation in `infrastructure/repositories/<module-name>.repository.ts` with your database implementation (TypeORM, Prisma, etc.)
4. **Add Business Logic**: Implement domain methods in the entity
5. **Add Validation**: Add class-validator decorators to DTOs
6. **Configure Module**: Import the module in your main `app.module.ts`

## Requirements

- Node.js >= 18
- pnpm >= 8
- NestJS project with CQRS module installed

## License

MIT
