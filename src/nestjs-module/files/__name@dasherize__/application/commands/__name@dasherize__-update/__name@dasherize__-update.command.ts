import { I<%= moduleNamePascal %>UpdateCommandDto } from '@/llm-context/<%= moduleName %>/application/dtos/commands/<%= moduleName %>-update/<%= moduleName %>-update-command.dto';
import { <%= moduleNamePascal %>ContentValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-content/<%= moduleName %>-content.vo';
import { <%= moduleNamePascal %>DescriptionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-description/<%= moduleName %>-description.vo';
import { <%= moduleNamePascal %>IsActiveValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-is-active/<%= moduleName %>-is-active.vo';
import { <%= moduleNamePascal %>SlugValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-slug/<%= moduleName %>-slug.vo';
import { <%= moduleNamePascal %>StatusValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-status/<%= moduleName %>-status.vo';
import { <%= moduleNamePascal %>TitleValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-title/<%= moduleName %>-title.vo';
import { <%= moduleNamePascal %>VersionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-version/<%= moduleName %>-version.vo';
import { <%= moduleNamePascal %>UuidValueObject } from '@/shared/domain/value-objects/identifiers/<%= moduleName %>-uuid/<%= moduleName %>-uuid.vo';

export class <%= moduleNamePascal %>UpdateCommand {
  readonly id: <%= moduleNamePascal %>UuidValueObject;
  readonly slug?: <%= moduleNamePascal %>SlugValueObject;
  readonly version?: <%= moduleNamePascal %>VersionValueObject;
  readonly title?: <%= moduleNamePascal %>TitleValueObject;
  readonly description?: <%= moduleNamePascal %>DescriptionValueObject;
  readonly content?: <%= moduleNamePascal %>ContentValueObject;
  readonly status?: <%= moduleNamePascal %>StatusValueObject;
  readonly isActive?: <%= moduleNamePascal %>IsActiveValueObject;

  constructor(props: I<%= moduleNamePascal %>UpdateCommandDto) {
    this.id = new <%= moduleNamePascal %>UuidValueObject(props.id);
    if (props.title !== undefined) {
      this.title = new <%= moduleNamePascal %>TitleValueObject(props.title);
      this.slug = new <%= moduleNamePascal %>SlugValueObject(props.title, {
        generateFromString: true,
      });
    }
    if (props.description !== undefined) {
      this.description = new <%= moduleNamePascal %>DescriptionValueObject(props.description);
    }
    if (props.content !== undefined) {
      this.content = new <%= moduleNamePascal %>ContentValueObject(props.content);
    }
    if (props.status !== undefined) {
      this.status = new <%= moduleNamePascal %>StatusValueObject(props.status);
    }

    this.isActive = new <%= moduleNamePascal %>IsActiveValueObject(true);
  }
}

