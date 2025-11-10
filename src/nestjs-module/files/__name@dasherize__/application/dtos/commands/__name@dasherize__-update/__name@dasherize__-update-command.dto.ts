/**
 * Data Transfer Object for updating a <%= moduleName %> via command layer.
 *
 * @interface I<%= moduleNamePascal %>UpdateCommandDto
 * @property {string} id - The id of the <%= moduleName %>. Must be provided.
 * @property {string} [title] - The title of the <%= moduleName %>. Optional.
 * @property {string | null} [description] - The description of the <%= moduleName %>. Optional.
 * @property {string} [content] - The content of the <%= moduleName %>. Optional.
 * @property {string} [status] - The status of the <%= moduleName %>. Optional.
 */
export interface I<%= moduleNamePascal %>UpdateCommandDto {
  id: string;
  title?: string;
  description?: string | null;
  content?: string;
  status?: string;
}

