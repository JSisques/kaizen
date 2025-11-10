import { <%= moduleNamePascal %>ContentValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-content/<%= moduleName %>-content.vo';
import { <%= moduleNamePascal %>DescriptionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-description/<%= moduleName %>-description.vo';
import { <%= moduleNamePascal %>IsActiveValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-is-active/<%= moduleName %>-is-active.vo';
import { <%= moduleNamePascal %>SlugValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-slug/<%= moduleName %>-slug.vo';
import { <%= moduleNamePascal %>StatusValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-status/<%= moduleName %>-status.vo';
import { <%= moduleNamePascal %>TitleValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-title/<%= moduleName %>-title.vo';
import { <%= moduleNamePascal %>VersionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-version/<%= moduleName %>-version.vo';

/**
 * Data Transfer Object for updating a <%= moduleName %>.
 *
 * @interface I<%= moduleNamePascal %>UpdateDto
 * @property {<%= moduleNamePascal %>SlugValueObject} [slug] - The slug of the <%= moduleName %>. Optional.
 * @property {<%= moduleNamePascal %>VersionValueObject} [version] - The version of the <%= moduleName %>. Optional.
 * @property {<%= moduleNamePascal %>TitleValueObject} [title] - The title of the <%= moduleName %>. Optional.
 * @property {<%= moduleNamePascal %>DescriptionValueObject} [description] - The description of the <%= moduleName %>. Optional.
 * @property {<%= moduleNamePascal %>ContentValueObject} [content] - The content of the <%= moduleName %>. Optional.
 * @property {<%= moduleNamePascal %>StatusValueObject} [status] - The status of the <%= moduleName %>. Optional.
 * @property {<%= moduleNamePascal %>IsActiveValueObject} [isActive] - The is active of the <%= moduleName %>. Optional.
 */
export interface I<%= moduleNamePascal %>UpdateDto {
  slug?: <%= moduleNamePascal %>SlugValueObject;
  version?: <%= moduleNamePascal %>VersionValueObject;
  title?: <%= moduleNamePascal %>TitleValueObject;
  description?: <%= moduleNamePascal %>DescriptionValueObject;
  content?: <%= moduleNamePascal %>ContentValueObject;
  status?: <%= moduleNamePascal %>StatusValueObject;
  isActive?: <%= moduleNamePascal %>IsActiveValueObject;
}

