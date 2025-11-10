import { <%= moduleNamePascal %>ContentValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-content/<%= moduleName %>-content.vo';
import { <%= moduleNamePascal %>DescriptionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-description/<%= moduleName %>-description.vo';
import { <%= moduleNamePascal %>IsActiveValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-is-active/<%= moduleName %>-is-active.vo';
import { <%= moduleNamePascal %>SlugValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-slug/<%= moduleName %>-slug.vo';
import { <%= moduleNamePascal %>StatusValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-status/<%= moduleName %>-status.vo';
import { <%= moduleNamePascal %>TitleValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-title/<%= moduleName %>-title.vo';
import { <%= moduleNamePascal %>VersionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-version/<%= moduleName %>-version.vo';
import { <%= moduleNamePascal %>UuidValueObject } from '@/shared/domain/value-objects/identifiers/<%= moduleName %>-uuid/<%= moduleName %>-uuid.vo';

/**
 * Data Transfer Object for creating a <%= moduleName %>.
 *
 * @interface I<%= moduleNamePascal %>CreateDto
 * @property {<%= moduleNamePascal %>UuidValueObject} id - The immutable identifier of the <%= moduleName %>.
 * @property {<%= moduleNamePascal %>SlugValueObject} slug - The slug of the <%= moduleName %>.
 * @property {<%= moduleNamePascal %>VersionValueObject} version - The version of the <%= moduleName %>.
 * @property {<%= moduleNamePascal %>TitleValueObject} title - The title of the <%= moduleName %>.
 * @property {<%= moduleNamePascal %>DescriptionValueObject | null} description - The description of the <%= moduleName %>.
 * @property {<%= moduleNamePascal %>ContentValueObject} content - The content of the <%= moduleName %>.
 * @property {<%= moduleNamePascal %>StatusValueObject} status - The status of the <%= moduleName %>.
 * @property {<%= moduleNamePascal %>IsActiveValueObject} isActive - The is active of the <%= moduleName %>.
 */
export interface I<%= moduleNamePascal %>CreateDto {
  id: <%= moduleNamePascal %>UuidValueObject;
  slug: <%= moduleNamePascal %>SlugValueObject;
  version: <%= moduleNamePascal %>VersionValueObject;
  title: <%= moduleNamePascal %>TitleValueObject;
  description: <%= moduleNamePascal %>DescriptionValueObject | null;
  content: <%= moduleNamePascal %>ContentValueObject;
  status: <%= moduleNamePascal %>StatusValueObject;
  isActive: <%= moduleNamePascal %>IsActiveValueObject;
}

