import { I<%= moduleNamePascal %>CreateDto } from '@/llm-context/<%= moduleName %>/domain/dtos/entities/<%= moduleName %>-create/<%= moduleName %>-create.dto';
import { I<%= moduleNamePascal %>UpdateDto } from '@/llm-context/<%= moduleName %>/domain/dtos/entities/<%= moduleName %>-update/<%= moduleName %>-update.dto';
import { <%= moduleNamePascal %>StatusEnum } from '@/llm-context/<%= moduleName %>/domain/enum/<%= moduleName %>-status.enum';
import { <%= moduleNamePascal %>Primitives } from '@/llm-context/<%= moduleName %>/domain/primitives/<%= moduleName %>.primitives';
import { <%= moduleNamePascal %>ContentValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-content/<%= moduleName %>-content.vo';
import { <%= moduleNamePascal %>DescriptionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-description/<%= moduleName %>-description.vo';
import { <%= moduleNamePascal %>IsActiveValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-is-active/<%= moduleName %>-is-active.vo';
import { <%= moduleNamePascal %>SlugValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-slug/<%= moduleName %>-slug.vo';
import { <%= moduleNamePascal %>StatusValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-status/<%= moduleName %>-status.vo';
import { <%= moduleNamePascal %>TitleValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-title/<%= moduleName %>-title.vo';
import { <%= moduleNamePascal %>VersionValueObject } from '@/llm-context/<%= moduleName %>/domain/value-objects/<%= moduleName %>-version/<%= moduleName %>-version.vo';
import { <%= moduleNamePascal %>CreatedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-created/<%= moduleName %>-created.event';
import { <%= moduleNamePascal %>DeletedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-deleted/<%= moduleName %>-deleted.event';
import { <%= moduleNamePascal %>UpdatedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-updated/<%= moduleName %>-updated.event';
import { <%= moduleNamePascal %>ActivatedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-activated/<%= moduleName %>-activated.event';
import { <%= moduleNamePascal %>DraftedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-drafted/<%= moduleName %>-drafted.event';
import { <%= moduleNamePascal %>ArchivedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-archived/<%= moduleName %>-archived.event';
import { <%= moduleNamePascal %>DeprecatedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-deprecated/<%= moduleName %>-deprecated.event';
import { <%= moduleNamePascal %>VersionIncrementedEvent } from '@/shared/domain/events/llm-context/<%= moduleName %>s/<%= moduleName %>-version-incremented/<%= moduleName %>-version-incremented.event';
import { <%= moduleNamePascal %>UuidValueObject } from '@/shared/domain/value-objects/identifiers/<%= moduleName %>-uuid/<%= moduleName %>-uuid.vo';
import { AggregateRoot } from '@nestjs/cqrs';

export class <%= moduleNamePascal %>Aggregate extends AggregateRoot {
  private readonly _id: <%= moduleNamePascal %>UuidValueObject;
  private _slug: <%= moduleNamePascal %>SlugValueObject;
  private _version: <%= moduleNamePascal %>VersionValueObject;
  private _title: <%= moduleNamePascal %>TitleValueObject;
  private _description: <%= moduleNamePascal %>DescriptionValueObject | null;
  private _content: <%= moduleNamePascal %>ContentValueObject;
  private _status: <%= moduleNamePascal %>StatusValueObject;
  private _isActive: <%= moduleNamePascal %>IsActiveValueObject;

  constructor(props: I<%= moduleNamePascal %>CreateDto, generateEvent: boolean = true) {
    super();

    this._id = props.id;
    this._slug = props.slug;
    this._version = props.version;
    this._title = props.title;
    this._description = props.description;
    this._content = props.content;
    this._status = props.status;
    this._isActive = props.isActive;

    if (generateEvent) {
      this.apply(
        new <%= moduleNamePascal %>CreatedEvent(
          {
            aggregateId: this._id.value,
            aggregateType: <%= moduleNamePascal %>Aggregate.name,
            eventType: <%= moduleNamePascal %>CreatedEvent.name,
          },
          this.toPrimitives(),
        ),
      );
    }
  }

  /**
   * Update the <%= moduleName %>.
   *
   * @param props - The properties to update.
   * @param generateEvent - Whether to generate an event.
   */
  public update(props: I<%= moduleNamePascal %>UpdateDto, generateEvent: boolean = true): void {
    this._slug = props.slug !== undefined ? props.slug : this._slug;
    this._version = props.version !== undefined ? props.version : this._version;
    this._title = props.title !== undefined ? props.title : this._title;
    this._description =
      props.description !== undefined ? props.description : this._description;
    this._content = props.content !== undefined ? props.content : this._content;
    this._status = props.status !== undefined ? props.status : this._status;
    this._isActive =
      props.isActive !== undefined ? props.isActive : this._isActive;

    if (generateEvent) {
      this.apply(
        new <%= moduleNamePascal %>UpdatedEvent(
          {
            aggregateId: this._id.value,
            aggregateType: <%= moduleNamePascal %>Aggregate.name,
            eventType: <%= moduleNamePascal %>UpdatedEvent.name,
          },
          this.toPrimitives(),
        ),
      );
    }
  }

  /**
   * Delete the <%= moduleName %>.
   *
   * @param generateEvent - Whether to generate an event.
   */
  public delete(generateEvent: boolean = true): void {
    if (generateEvent) {
      this.apply(
        new <%= moduleNamePascal %>DeletedEvent(
          {
            aggregateId: this._id.value,
            aggregateType: <%= moduleNamePascal %>Aggregate.name,
            eventType: <%= moduleNamePascal %>DeletedEvent.name,
          },
          this.toPrimitives(),
        ),
      );
    }
  }

  /**
   * Activate the <%= moduleName %>.
   *
   * @param generateEvent - Whether to generate an event.
   */
  public activate(generateEvent: boolean = true): void {
    this._status = new <%= moduleNamePascal %>StatusValueObject(<%= moduleNamePascal %>StatusEnum.ACTIVE);
    if (generateEvent) {
      this.apply(
        new <%= moduleNamePascal %>ActivatedEvent(
          {
            aggregateId: this._id.value,
            aggregateType: <%= moduleNamePascal %>Aggregate.name,
            eventType: <%= moduleNamePascal %>ActivatedEvent.name,
          },
          this.toPrimitives(),
        ),
      );
    }
  }

  /**
   * Deactivate the <%= moduleName %>.
   *
   * @param generateEvent - Whether to generate an event.
   */
  public draft(generateEvent: boolean = true): void {
    this._status = new <%= moduleNamePascal %>StatusValueObject(<%= moduleNamePascal %>StatusEnum.DRAFT);
    if (generateEvent) {
      this.apply(
        new <%= moduleNamePascal %>DraftedEvent(
          {
            aggregateId: this._id.value,
            aggregateType: <%= moduleNamePascal %>Aggregate.name,
            eventType: <%= moduleNamePascal %>DraftedEvent.name,
          },
          this.toPrimitives(),
        ),
      );
    }
  }

  /**
   * Archive the <%= moduleName %>.
   *
   * @param generateEvent - Whether to generate an event.
   */
  public archive(generateEvent: boolean = true): void {
    this._status = new <%= moduleNamePascal %>StatusValueObject(<%= moduleNamePascal %>StatusEnum.ARCHIVED);
    if (generateEvent) {
      this.apply(
        new <%= moduleNamePascal %>ArchivedEvent(
          {
            aggregateId: this._id.value,
            aggregateType: <%= moduleNamePascal %>Aggregate.name,
            eventType: <%= moduleNamePascal %>ArchivedEvent.name,
          },
          this.toPrimitives(),
        ),
      );
    }
  }

  /**
   * Deprecate the <%= moduleName %>.
   *
   * @param generateEvent - Whether to generate an event.
   */
  public deprecate(generateEvent: boolean = true): void {
    this._status = new <%= moduleNamePascal %>StatusValueObject(<%= moduleNamePascal %>StatusEnum.DEPRECATED);
    if (generateEvent) {
      this.apply(
        new <%= moduleNamePascal %>DeprecatedEvent(
          {
            aggregateId: this._id.value,
            aggregateType: <%= moduleNamePascal %>Aggregate.name,
            eventType: <%= moduleNamePascal %>DeprecatedEvent.name,
          },
          this.toPrimitives(),
        ),
      );
    }
  }

  /**
   * Increment the version of the <%= moduleName %>.
   *
   * @param generateEvent - Whether to generate an event.
   */
  public incrementVersion(generateEvent: boolean = true): void {
    this._version = new <%= moduleNamePascal %>VersionValueObject(this._version.value + 1);
    if (generateEvent) {
      this.apply(
        new <%= moduleNamePascal %>VersionIncrementedEvent(
          {
            aggregateId: this._id.value,
            aggregateType: <%= moduleNamePascal %>Aggregate.name,
            eventType: <%= moduleNamePascal %>VersionIncrementedEvent.name,
          },
          this.toPrimitives(),
        ),
      );
    }
  }

  /**
   * Gets the unique identifier of the <%= moduleName %>.
   * @returns {<%= moduleNamePascal %>UuidValueObject} The <%= moduleName %> UUID value object.
   */
  public get id(): <%= moduleNamePascal %>UuidValueObject {
    return this._id;
  }

  /**
   * Gets the slug of the <%= moduleName %>.
   * @returns {<%= moduleNamePascal %>SlugValueObject} The slug of the <%= moduleName %>.
   */
  public get slug(): <%= moduleNamePascal %>SlugValueObject {
    return this._slug;
  }

  /**
   * Gets the version of the <%= moduleName %>.
   * @returns {<%= moduleNamePascal %>VersionValueObject} The version of the <%= moduleName %>.
   */
  public get version(): <%= moduleNamePascal %>VersionValueObject {
    return this._version;
  }

  /**
   * Gets the title of the <%= moduleName %>.
   * @returns {<%= moduleNamePascal %>TitleValueObject} The title of the <%= moduleName %>.
   */
  public get title(): <%= moduleNamePascal %>TitleValueObject {
    return this._title;
  }

  /**
   * Gets the description of the <%= moduleName %>.
   * @returns {<%= moduleNamePascal %>DescriptionValueObject | null} The description of the <%= moduleName %>.
   */
  public get description(): <%= moduleNamePascal %>DescriptionValueObject | null {
    return this._description;
  }

  /**
   * Gets the content of the <%= moduleName %>.
   * @returns {<%= moduleNamePascal %>ContentValueObject} The content of the <%= moduleName %>.
   */
  public get content(): <%= moduleNamePascal %>ContentValueObject {
    return this._content;
  }

  /**
   * Gets the status of the <%= moduleName %>.
   * @returns {<%= moduleNamePascal %>StatusValueObject} The status of the <%= moduleName %>.
   */
  public get status(): <%= moduleNamePascal %>StatusValueObject {
    return this._status;
  }

  /**
   * Gets the is active of the <%= moduleName %>.
   * @returns {<%= moduleNamePascal %>IsActiveValueObject} The is active of the <%= moduleName %>.
   */
  public get isActive(): <%= moduleNamePascal %>IsActiveValueObject {
    return this._isActive;
  }

  /**
   * Converts the <%= moduleName %> aggregate to its primitive representation.
   * @returns {<%= moduleNamePascal %>Primitives} The primitive representation of the <%= moduleName %>.
   */
  public toPrimitives(): <%= moduleNamePascal %>Primitives {
    return {
      id: this._id.value,
      slug: this._slug.value,
      version: this._version.value,
      title: this._title.value,
      description: this._description ? this._description.value : null,
      content: this._content.value,
      status: this._status.value,
      isActive: this._isActive.value,
    };
  }
}

