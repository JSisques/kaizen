import { I<%= moduleNamePascal %>FindByIdQueryDto } from '@/llm-context/<%= moduleName %>/application/dtos/queries/<%= moduleName %>-find-by-id/<%= moduleName %>-find-by-id-query.dto';
import { <%= moduleNamePascal %>UuidValueObject } from '@/shared/domain/value-objects/identifiers/<%= moduleName %>-uuid/<%= moduleName %>-uuid.vo';

export class Find<%= moduleNamePascal %>ByIdQuery {
  readonly id: <%= moduleNamePascal %>UuidValueObject;

  constructor(props: I<%= moduleNamePascal %>FindByIdQueryDto) {
    this.id = new <%= moduleNamePascal %>UuidValueObject(props.id);
  }
}

