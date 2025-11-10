import { <%= moduleNamePascal %>Aggregate } from '@/llm-context/<%= moduleName %>/domain/aggregates/<%= moduleName %>.aggregate';

export const <%= moduleNameUpper %>_WRITE_REPOSITORY_TOKEN = Symbol('<%= moduleNamePascal %>WriteRepository');

export interface <%= moduleNamePascal %>WriteRepository {
  findById(id: string): Promise<<%= moduleNamePascal %>Aggregate | null>;
  save(<%= moduleNameCamel %>: <%= moduleNamePascal %>Aggregate): Promise<<%= moduleNamePascal %>Aggregate>;
  delete(id: string): Promise<boolean>;
}

