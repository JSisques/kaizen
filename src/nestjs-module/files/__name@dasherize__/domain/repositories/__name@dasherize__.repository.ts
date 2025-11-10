import { <%= moduleNamePascal %> } from '../entities/<%= moduleName %>.entity';

export interface <%= moduleNamePascal %>Repository {
  findById(id: string): Promise<<%= moduleNamePascal %> | null>;
  findAll(): Promise<<%= moduleNamePascal %>[]>;
  save(<%= moduleNameCamel %>: <%= moduleNamePascal %>): Promise<<%= moduleNamePascal %>>;
  delete(id: string): Promise<void>;
}

