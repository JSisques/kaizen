/**
 * Data Transfer Object for creating a <%= moduleName %> view model.
 *
 * @interface I<%= moduleNamePascal %>CreateViewModelDto
 * @property {string} id - The immutable identifier of the <%= moduleName %>.
 * @property {string} slug - The slug of the <%= moduleName %>.
 * @property {number} version - The version of the <%= moduleName %>.
 * @property {string} title - The title of the <%= moduleName %>.
 * @property {string | null} description - The description of the <%= moduleName %>.
 * @property {string} content - The content of the <%= moduleName %>.
 * @property {string} status - The status of the <%= moduleName %>.
 * @property {boolean} isActive - The is active of the <%= moduleName %>.
 */
export interface I<%= moduleNamePascal %>CreateViewModelDto {
  id: string;
  slug: string;
  version: number;
  title: string;
  description: string | null;
  content: string;
  status: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

