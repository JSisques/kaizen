import { I<%= moduleNamePascal %>CreateViewModelDto } from '@/llm-context/<%= moduleName %>/domain/dtos/view-models/<%= moduleName %>-create-view-model/<%= moduleName %>-create-view-model.dto';
import { I<%= moduleNamePascal %>UpdateViewModelDto } from '@/llm-context/<%= moduleName %>/domain/dtos/view-models/<%= moduleName %>-update-view-model/<%= moduleName %>-update-view-model.dto';

/**
 * Represents a <%= moduleName %>'s view model.
 * Encapsulates and exposes properties for the <%= moduleName %>.
 */
export class <%= moduleNamePascal %>ViewModel {
  private readonly _id: string;
  private _slug: string;
  private _version: number;
  private _title: string;
  private _description: string | null;
  private _content: string;
  private _status: string;
  private _isActive: boolean;
  private _createdAt: Date;
  private _updatedAt: Date;

  /**
   * Constructs a <%= moduleNamePascal %>ViewModel instance.
   * @param props - The properties for creating the <%= moduleName %> view model.
   */
  constructor(props: I<%= moduleNamePascal %>CreateViewModelDto) {
    this._id = props.id;
    this._slug = props.slug;
    this._version = props.version;
    this._title = props.title;
    this._description = props.description;
    this._content = props.content;
    this._status = props.status;
    this._isActive = props.isActive;
    this._createdAt = props.createdAt || new Date();
    this._updatedAt = props.updatedAt || new Date();
  }

  /**
   * Updates the <%= moduleName %> view model with new data
   *
   * @param   updateData - The data to update
   * @returns A new <%= moduleNamePascal %>ViewModel instance with updated data
   */
  public update(updateData: I<%= moduleNamePascal %>UpdateViewModelDto) {
    this._slug = updateData.slug !== undefined ? updateData.slug : this._slug;
    this._version =
      updateData.version !== undefined ? updateData.version : this._version;
    this._title =
      updateData.title !== undefined ? updateData.title : this._title;
    this._description =
      updateData.description !== undefined
        ? updateData.description
        : this._description;
    this._content =
      updateData.content !== undefined ? updateData.content : this._content;
    this._status =
      updateData.status !== undefined ? updateData.status : this._status;
    this._isActive =
      updateData.isActive !== undefined ? updateData.isActive : this._isActive;
    this._updatedAt = new Date();
  }

  /** @returns {string} The unique identifier of the <%= moduleName %> */
  public get id(): string {
    return this._id;
  }

  /** @returns {string} The slug of the <%= moduleName %> */
  public get slug(): string {
    return this._slug;
  }

  /** @returns {number} The version of the <%= moduleName %> */
  public get version(): number {
    return this._version;
  }

  /** @returns {string} The title of the <%= moduleName %> */
  public get title(): string {
    return this._title;
  }

  /** @returns {string | null} The description of the <%= moduleName %> */
  public get description(): string | null {
    return this._description;
  }

  /** @returns {string} The content of the <%= moduleName %> */
  public get content(): string {
    return this._content;
  }

  /** @returns {string} The status of the <%= moduleName %> */
  public get status(): string {
    return this._status;
  }
  /** @returns {boolean} The is active of the <%= moduleName %> */
  public get isActive(): boolean {
    return this._isActive;
  }
  /** @returns {Date} The timestamp when the <%= moduleName %> was created */
  public get createdAt(): Date {
    return this._createdAt;
  }

  /** @returns {Date} The timestamp when the <%= moduleName %> was last updated */
  public get updatedAt(): Date {
    return this._updatedAt;
  }
}

