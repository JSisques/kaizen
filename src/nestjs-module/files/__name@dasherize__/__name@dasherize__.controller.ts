import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { <%= moduleNamePascal %>Service } from './application/<%= moduleName %>.service';
import { Create<%= moduleNamePascal %>Dto } from './application/dto/create-<%= moduleName %>.dto';
import { Update<%= moduleNamePascal %>Dto } from './application/dto/update-<%= moduleName %>.dto';
import { Create<%= moduleNamePascal %>Command } from './application/commands/create-<%= moduleName %>.command';
import { Update<%= moduleNamePascal %>Command } from './application/commands/update-<%= moduleName %>.command';
import { Delete<%= moduleNamePascal %>Command } from './application/commands/delete-<%= moduleName %>.command';
import { Get<%= moduleNamePascal %>ByIdQuery } from './application/queries/get-<%= moduleName %>-by-id.query';
import { GetAll<%= moduleNamePascal %>Query } from './application/queries/get-all-<%= moduleName %>.query';

@Controller('<%= moduleName %>')
export class <%= moduleNamePascal %>Controller {
  constructor(
    private readonly <%= moduleNameCamel %>Service: <%= moduleNamePascal %>Service,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() create<%= moduleNamePascal %>Dto: Create<%= moduleNamePascal %>Dto) {
    const command = new Create<%= moduleNamePascal %>Command(create<%= moduleNamePascal %>Dto);
    return this.commandBus.execute(command);
  }

  @Get()
  async findAll() {
    const query = new GetAll<%= moduleNamePascal %>Query();
    return this.queryBus.execute(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const query = new Get<%= moduleNamePascal %>ByIdQuery(id);
    return this.queryBus.execute(query);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() update<%= moduleNamePascal %>Dto: Update<%= moduleNamePascal %>Dto,
  ) {
    const command = new Update<%= moduleNamePascal %>Command(id, update<%= moduleNamePascal %>Dto);
    return this.commandBus.execute(command);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    const command = new Delete<%= moduleNamePascal %>Command(id);
    return this.commandBus.execute(command);
  }
}

