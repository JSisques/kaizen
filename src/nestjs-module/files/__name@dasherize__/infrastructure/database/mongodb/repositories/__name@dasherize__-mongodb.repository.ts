import { <%= moduleNamePascal %>ReadRepository } from '@/llm-context/<%= moduleName %>/domain/repositories/<%= moduleName %>-read/<%= moduleName %>-read.repository';
import { <%= moduleNamePascal %>ViewModel } from '@/llm-context/<%= moduleName %>/domain/view-models/<%= moduleName %>.view-model';
import { <%= moduleNamePascal %>MongoDBMapper } from '@/llm-context/<%= moduleName %>/infrastructure/database/mongodb/mappers/<%= moduleName %>-mongodb.mapper';
import { Criteria } from '@/shared/domain/entities/criteria';
import { PaginatedResult } from '@/shared/domain/entities/paginated-result.entity';
import { BaseMongoRepository } from '@/shared/infrastructure/database/mongodb/base-mongo.repository';
import { MongoService } from '@/shared/infrastructure/database/mongodb/mongo.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class <%= moduleNamePascal %>MongoRepository
  extends BaseMongoRepository
  implements <%= moduleNamePascal %>ReadRepository
{
  private readonly collectionName = '<%= moduleName %>s';

  constructor(
    mongoService: MongoService,
    private readonly <%= moduleNameCamel %>MongoDBMapper: <%= moduleNamePascal %>MongoDBMapper,
  ) {
    super(mongoService);
    this.logger = new Logger(<%= moduleNamePascal %>MongoRepository.name);
  }

  /**
   * Finds a <%= moduleName %> by id
   *
   * @param id - The id of the <%= moduleName %> to find
   * @returns The <%= moduleName %> if found, null otherwise
   */
  async findById(id: string): Promise<<%= moduleNamePascal %>ViewModel | null> {
    this.logger.log(`Finding <%= moduleName %> by id: ${id}`);

    const collection = this.mongoService.getCollection(this.collectionName);
    const <%= moduleNameCamel %>ViewModel = await collection.findOne({ id });

    return <%= moduleNameCamel %>ViewModel
      ? this.<%= moduleNameCamel %>MongoDBMapper.toViewModel({
          id: <%= moduleNameCamel %>ViewModel.id,
          title: <%= moduleNameCamel %>ViewModel.title,
          slug: <%= moduleNameCamel %>ViewModel.slug,
          version: <%= moduleNameCamel %>ViewModel.version,
          description: <%= moduleNameCamel %>ViewModel.description,
          content: <%= moduleNameCamel %>ViewModel.content,
          status: <%= moduleNameCamel %>ViewModel.status,
          isActive: <%= moduleNameCamel %>ViewModel.isActive,
          createdAt: <%= moduleNameCamel %>ViewModel.createdAt,
          updatedAt: <%= moduleNameCamel %>ViewModel.updatedAt,
        })
      : null;
  }

  /**
   * Finds <%= moduleName %>s by criteria
   *
   * @param criteria - The criteria to find <%= moduleName %>s by
   * @returns The <%= moduleName %>s found
   */

  async findByCriteria(
    criteria: Criteria,
  ): Promise<PaginatedResult<<%= moduleNamePascal %>ViewModel>> {
    this.logger.log(`Finding <%= moduleName %>s by criteria: ${JSON.stringify(criteria)}`);

    const collection = this.mongoService.getCollection(this.collectionName);

    // 01: Build MongoDB query from criteria
    const mongoQuery = this.buildMongoQuery(criteria);
    const sortQuery = this.buildSortQuery(criteria);

    // 02: Calculate pagination
    const page = criteria.pagination.page || 1;
    const limit = criteria.pagination.perPage || 10;
    const skip = (page - 1) * limit;

    // 03: Execute query with pagination
    const [data, total] = await Promise.all([
      collection
        .find(mongoQuery)
        .sort(sortQuery)
        .skip(skip)
        .limit(limit)
        .toArray(),
      collection.countDocuments(mongoQuery),
    ]);

    // 04: Convert MongoDB documents to domain entities
    const <%= moduleName %>s = data.map((doc) =>
      this.<%= moduleNameCamel %>MongoDBMapper.toViewModel({
        id: doc.id,
        title: doc.title,
        slug: doc.slug,
        version: doc.version,
        description: doc.description,
        content: doc.content,
        status: doc.status,
        isActive: doc.isActive,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
      }),
    );

    return new PaginatedResult<<%= moduleNamePascal %>ViewModel>(<%= moduleName %>s, total, page, limit);
  }

  /**
   * Saves a <%= moduleName %> view model (upsert operation)
   *
   * @param <%= moduleNameCamel %>ViewModel - The <%= moduleName %> view model to save
   */
  async save(<%= moduleNameCamel %>ViewModel: <%= moduleNamePascal %>ViewModel): Promise<void> {
    this.logger.log(`Saving <%= moduleName %> view model with id: ${<%= moduleNameCamel %>ViewModel.id}`);

    const collection = this.mongoService.getCollection(this.collectionName);
    const mongoData = this.<%= moduleNameCamel %>MongoDBMapper.toMongoData(<%= moduleNameCamel %>ViewModel);

    // 01: Use upsert to either insert or update the <%= moduleName %> view model
    await collection.replaceOne({ id: <%= moduleNameCamel %>ViewModel.id }, mongoData, {
      upsert: true,
    });
  }

  /**
   * Deletes a <%= moduleName %> view model by id
   *
   * @param id - The id of the <%= moduleName %> view model to delete
   * @returns True if the <%= moduleName %> was deleted, false otherwise
   */
  async delete(id: string): Promise<boolean> {
    this.logger.log(`Deleting <%= moduleName %> view model by id: ${id}`);

    const collection = this.mongoService.getCollection(this.collectionName);

    // 01: Delete the <%= moduleName %> view model from the collection
    await collection.deleteOne({ id });

    return true;
  }
}

