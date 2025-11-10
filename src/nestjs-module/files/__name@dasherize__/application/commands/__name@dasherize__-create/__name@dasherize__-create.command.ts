import { I<%= moduleNamePascal %>CreateCommandDto } from '@/llm-context/<%= moduleName %>/application/dtos/commands/<%= moduleName %>-create/<%= moduleName %>-create-command.dto';
import { <%= moduleNamePascal %>ContentValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-content/<%= moduleName %>-content.vo';
import { <%= moduleNamePascal %>DescriptionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-description/<%= moduleName %>-description.vo';
import { <%= moduleNamePascal %>IsActiveValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-is-active/<%= moduleName %>-is-active.vo';
import { <%= moduleNamePascal %>SlugValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-slug/<%= moduleName %>-slug.vo';
import { <%= moduleNamePascal %>StatusValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-status/<%= moduleName %>-status.vo';
import { <%= moduleNamePascal %>TitleValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-title/<%= moduleName %>-title.vo';
import { <%= moduleNamePascal %>VersionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-version/<%= moduleName %>-version.vo';
import { <%= moduleNamePascal %>UuidValueObject } from '@/shared/domain/value-objects/identifiers/<%= moduleName %>-uuid/<%= moduleName %>-uuid.vo';

export class <%= moduleNamePascal %>CreateCommand {
  readonly id: <%= moduleNamePascal %>UuidValueObject;
  readonly slug: <%= moduleNamePascal %>SlugValueObject;
  readonly version: <%= moduleNamePascal %>VersionValueObject;
  readonly title: <%= moduleNamePascal %>TitleValueObject;
  readonly description: <%= moduleNamePascal %>DescriptionValueObject | null;
  readonly content: <%= moduleNamePascal %>ContentValueObject;
  readonly status: <%= moduleNamePascal %>StatusValueObject;
  readonly isActive: <%= moduleNamePascal %>IsActiveValueObject;

  constructor(props: I<%= moduleNamePascal %>CreateCommandDto) {
    this.id = new <%= moduleNamePascal %>UuidValueObject();
    this.slug = new <%= moduleNamePascal %>SlugValueObject(props.title, {
      generateFromString: true,
    });
    this.version = new <%= moduleNamePascal %>VersionValueObject(1);
    this.title = new <%= moduleNamePascal %>TitleValueObject(props.title);
    this.description = new <%= moduleNamePascal %>DescriptionValueObject(props.description);
    this.content = new <%= moduleNamePascal %>ContentValueObject(props.content);
    this.status = new <%= moduleNamePascal %>StatusValueObject(props.status);
    this.isActive = new <%= moduleNamePascal %>IsActiveValueObject(true);
  }
}

