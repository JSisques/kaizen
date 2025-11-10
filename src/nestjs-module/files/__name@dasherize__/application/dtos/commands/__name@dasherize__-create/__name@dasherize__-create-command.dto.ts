/**
 * Data Transfer Object for creating a new <%= moduleName %> via command layer.
 *
 * @interface I<%= moduleNamePascal %>CreateCommandDto
 * @property {string} title - The title of the <%= moduleName %>. Must be provided.
 * @property {string | null} description - The description of the <%= moduleName %>. Can be null if not provided.
 * @property {string} content - The content of the <%= moduleName %>. Must be provided.
 * @property {string} status - The status of the <%= moduleName %>. Must be provided.
 */
export interface I<%= moduleNamePascal %>CreateCommandDto {
  title: string;
  description: string | null;
  content: string;
  status: string;
}

