import { <%= moduleNamePascal %>ViewModel } from '@/llm-context/<%= moduleName %>/domain/view-models/<%= moduleName %>.view-model';
import { Criteria } from '@/shared/domain/entities/criteria';
import { PaginatedResult } from '@/shared/domain/entities/paginated-result.entity';

export const <%= moduleNameUpper %>_READ_REPOSITORY_TOKEN = Symbol('<%= moduleNamePascal %>ReadRepository');

export interface <%= moduleNamePascal %>ReadRepository {
  findById(id: string): Promise<<%= moduleNamePascal %>ViewModel | null>;
  findByCriteria(criteria: Criteria): Promise<PaginatedResult<<%= moduleNamePascal %>ViewModel>>;
  save(<%= moduleNameCamel %>ViewModel: <%= moduleNamePascal %>ViewModel): Promise<void>;
  delete(id: string): Promise<boolean>;
}

