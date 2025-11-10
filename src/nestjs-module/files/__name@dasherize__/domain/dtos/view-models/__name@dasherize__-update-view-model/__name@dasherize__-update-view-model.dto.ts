/**
 * Data Transfer Object for updating a <%= moduleName %> view model.
 *
 * @interface I<%= moduleNamePascal %>UpdateViewModelDto
 * @property {string} [slug] - The slug of the <%= moduleName %>. Optional.
 * @property {number} [version] - The version of the <%= moduleName %>. Optional.
 * @property {string} [title] - The title of the <%= moduleName %>. Optional.
 * @property {string | null} [description] - The description of the <%= moduleName %>. Optional.
 * @property {string} [content] - The content of the <%= moduleName %>. Optional.
 * @property {string} [status] - The status of the <%= moduleName %>. Optional.
 * @property {boolean} [isActive] - The is active of the <%= moduleName %>. Optional.
 */
export interface I<%= moduleNamePascal %>UpdateViewModelDto {
  slug?: string;
  version?: number;
  title?: string;
  description?: string | null;
  content?: string;
  status?: string;
  isActive?: boolean;
}

