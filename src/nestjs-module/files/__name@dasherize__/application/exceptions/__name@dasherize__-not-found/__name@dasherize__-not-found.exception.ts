import { NotFoundException } from '@nestjs/common';

export class <%= moduleNamePascal %>NotFoundException extends NotFoundException {
  constructor(id: string) {
    super(`<%= moduleNamePascal %> with id ${id} not found`);
  }
}

