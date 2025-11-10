import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { <%= moduleNamePascal %>Controller } from './<%= moduleName %>.controller';
import { <%= moduleNamePascal %>Service } from './application/<%= moduleName %>.service';
import { Create<%= moduleNamePascal %>Handler } from './application/handlers/create-<%= moduleName %>.handler';
import { Update<%= moduleNamePascal %>Handler } from './application/handlers/update-<%= moduleName %>.handler';
import { Delete<%= moduleNamePascal %>Handler } from './application/handlers/delete-<%= moduleName %>.handler';
import { Get<%= moduleNamePascal %>ByIdHandler } from './application/handlers/get-<%= moduleName %>-by-id.handler';
import { GetAll<%= moduleNamePascal %>Handler } from './application/handlers/get-all-<%= moduleName %>.handler';
import { <%= moduleNamePascal %>Repository } from './infrastructure/repositories/<%= moduleName %>.repository';

const commandHandlers = [
  Create<%= moduleNamePascal %>Handler,
  Update<%= moduleNamePascal %>Handler,
  Delete<%= moduleNamePascal %>Handler,
];

const queryHandlers = [
  Get<%= moduleNamePascal %>ByIdHandler,
  GetAll<%= moduleNamePascal %>Handler,
];

@Module({
  imports: [CqrsModule],
  controllers: [<%= moduleNamePascal %>Controller],
  providers: [
    <%= moduleNamePascal %>Service,
    <%= moduleNamePascal %>Repository,
    ...commandHandlers,
    ...queryHandlers,
  ],
  exports: [<%= moduleNamePascal %>Service],
})
export class <%= moduleNamePascal %>Module {}

