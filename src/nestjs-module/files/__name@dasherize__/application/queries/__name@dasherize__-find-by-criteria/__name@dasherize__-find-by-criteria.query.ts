import { I<%= moduleNamePascal %>FindByCriteriaQueryDto } from '@/llm-context/<%= moduleName %>/application/dtos/queries/<%= moduleName %>-find-by-criteria/<%= moduleName %>-find-by-criteria-query.dto';
import { Criteria } from '@/shared/domain/entities/criteria';

export class Find<%= moduleNamePascal %>sByCriteriaQuery {
  readonly criteria: Criteria;

  constructor(props: I<%= moduleNamePascal %>FindByCriteriaQueryDto) {
    this.criteria = props.criteria;
  }
}

