import { I<%= moduleNamePascal %>DeleteCommandDto } from '@/llm-context/<%= moduleName %>/application/dtos/commands/<%= moduleName %>-delete/<%= moduleName %>-delete-command.dto';
import { <%= moduleNamePascal %>UuidValueObject } from '@/shared/domain/value-objects/identifiers/<%= moduleName %>-uuid/<%= moduleName %>-uuid.vo';

export class <%= moduleNamePascal %>DeleteCommand {
  readonly id: <%= moduleNamePascal %>UuidValueObject;

  constructor(props: I<%= moduleNamePascal %>DeleteCommandDto) {
    this.id = new <%= moduleNamePascal %>UuidValueObject(props.id);
  }
}

