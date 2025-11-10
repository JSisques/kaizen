import { PartialType } from '@nestjs/mapped-types';
import { Create<%= moduleNamePascal %>Dto } from './create-<%= moduleName %>.dto';

export class Update<%= moduleNamePascal %>Dto extends PartialType(Create<%= moduleNamePascal %>Dto) {}

