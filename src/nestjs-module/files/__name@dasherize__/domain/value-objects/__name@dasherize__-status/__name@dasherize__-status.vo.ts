import { <%= moduleNamePascal %>StatusEnum } from '@/llm-context/<%= moduleName %>/domain/enum/<%= moduleName %>-status.enum';
import { EnumValueObject } from '@/shared/domain/value-objects/enum.vo';

/**
 * <%= moduleNamePascal %>StatusValueObject represents a <%= moduleName %>'s status in the domain.
 * It extends the EnumValueObject with validation for <%= moduleName %> statuses.
 */
export class <%= moduleNamePascal %>StatusValueObject extends EnumValueObject<<%= moduleNamePascal %>StatusEnum> {
  constructor(value: <%= moduleNamePascal %>StatusEnum | string) {
    super(value, Object.values(<%= moduleNamePascal %>StatusEnum));
  }
}

