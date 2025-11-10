import { Injectable } from '@nestjs/common';
import { <%= moduleNamePascal %>Repository } from '../domain/repositories/<%= moduleName %>.repository';

@Injectable()
export class <%= moduleNamePascal %>Service {
  constructor(
    private readonly <%= moduleNameCamel %>Repository: <%= moduleNamePascal %>Repository,
  ) {}

  // Add your application logic here
  // This service acts as an application service coordinating between
  // the domain layer and infrastructure layer
}

