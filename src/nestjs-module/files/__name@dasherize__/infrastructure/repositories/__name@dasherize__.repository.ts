import { Injectable } from '@nestjs/common';
import { <%= moduleNamePascal %>Repository as I<%= moduleNamePascal %>Repository } from '../../domain/repositories/<%= moduleName %>.repository';
import { <%= moduleNamePascal %> } from '../../domain/entities/<%= moduleName %>.entity';

@Injectable()
export class <%= moduleNamePascal %>Repository implements I<%= moduleNamePascal %>Repository {
  // In-memory storage for demo purposes
  // Replace this with your actual database implementation (TypeORM, Prisma, etc.)
  private storage: Map<string, <%= moduleNamePascal %>> = new Map();

  async findById(id: string): Promise<<%= moduleNamePascal %> | null> {
    return this.storage.get(id) || null;
  }

  async findAll(): Promise<<%= moduleNamePascal %>[]> {
    return Array.from(this.storage.values());
  }

  async save(<%= moduleNameCamel %>: <%= moduleNamePascal %>): Promise<<%= moduleNamePascal %>> {
    if (!<%= moduleNameCamel %>.id) {
      <%= moduleNameCamel %>.id = Date.now().toString();
    }
    this.storage.set(<%= moduleNameCamel %>.id, <%= moduleNameCamel %>);
    return <%= moduleNameCamel %>;
  }

  async delete(id: string): Promise<void> {
    this.storage.delete(id);
  }
}

