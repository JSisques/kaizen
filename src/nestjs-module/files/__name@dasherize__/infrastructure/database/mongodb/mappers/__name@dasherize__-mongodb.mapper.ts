import { <%= moduleNamePascal %>ViewModelFactory } from '@/llm-context/<%= moduleName %>/domain/factories/<%= moduleName %>-plan-view-model/<%= moduleName %>-view-model.factory';
import { <%= moduleNamePascal %>ViewModel } from '@/llm-context/<%= moduleName %>/domain/view-models/<%= moduleName %>.view-model';
import { <%= moduleNamePascal %>MongoDbDto } from '@/llm-context/<%= moduleName %>/infrastructure/database/mongodb/dtos/<%= moduleName %>-mongodb.dto';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class <%= moduleNamePascal %>MongoDBMapper {
  private readonly logger = new Logger(<%= moduleNamePascal %>MongoDBMapper.name);

  constructor(
    private readonly <%= moduleNameCamel %>ViewModelFactory: <%= moduleNamePascal %>ViewModelFactory,
  ) {}
  /**
   * Converts a MongoDB document to a <%= moduleName %> view model
   *
   * @param doc - The MongoDB document to convert
   * @returns The <%= moduleName %> view model
   */
  public toViewModel(doc: <%= moduleNamePascal %>MongoDbDto): <%= moduleNamePascal %>ViewModel {
    this.logger.log(
      `Converting MongoDB document to <%= moduleName %> view model with id ${doc.id}`,
    );

    return this.<%= moduleNameCamel %>ViewModelFactory.create(doc);
  }

  /**
   * Converts a <%= moduleName %> view model to a MongoDB document
   *
   * @param <%= moduleNameCamel %>ViewModel - The <%= moduleName %> view model to convert
   * @returns The MongoDB document
   */
  public toMongoData(<%= moduleNameCamel %>ViewModel: <%= moduleNamePascal %>ViewModel): <%= moduleNamePascal %>MongoDbDto {
    this.logger.log(
      `Converting <%= moduleName %> view model with id ${<%= moduleNameCamel %>ViewModel.id} to MongoDB document`,
    );

    return {
      id: <%= moduleNameCamel %>ViewModel.id,
      slug: <%= moduleNameCamel %>ViewModel.slug,
      version: <%= moduleNameCamel %>ViewModel.version,
      title: <%= moduleNameCamel %>ViewModel.title,
      description: <%= moduleNameCamel %>ViewModel.description,
      content: <%= moduleNameCamel %>ViewModel.content,
      status: <%= moduleNameCamel %>ViewModel.status,
      isActive: <%= moduleNameCamel %>ViewModel.isActive,
      createdAt: <%= moduleNameCamel %>ViewModel.createdAt,
      updatedAt: <%= moduleNameCamel %>ViewModel.updatedAt,
    };
  }
}

