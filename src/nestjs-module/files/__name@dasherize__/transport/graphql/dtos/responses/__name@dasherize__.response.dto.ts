import { BasePaginatedResultDto } from '@/shared/transport/graphql/dtos/responses/base-paginated-result.dto';
import { Field, ObjectType } from '@nestjs/graphql';
import { <%= moduleNamePascal %>StatusEnum } from '@prisma/client';

@ObjectType('<%= moduleNamePascal %>ResponseDto')
export class <%= moduleNamePascal %>ResponseDto {
  @Field(() => String, {
    nullable: false,
    description: 'The id of the <%= moduleName %>',
  })
  id: string;

  @Field(() => String, {
    nullable: false,
    description: 'The slug of the <%= moduleName %>',
  })
  slug: string;

  @Field(() => Number, {
    nullable: false,
    description: 'The version of the <%= moduleName %>',
  })
  version: number;

  @Field(() => String, {
    nullable: false,
    description: 'The title of the <%= moduleName %>',
  })
  title: string;

  @Field(() => String, {
    nullable: true,
    description: 'The description of the <%= moduleName %>',
  })
  description: string | null;

  @Field(() => String, {
    nullable: false,
    description: 'The content of the <%= moduleName %>',
  })
  content: string;

  @Field(() => <%= moduleNamePascal %>StatusEnum, {
    nullable: false,
    description: 'The status of the <%= moduleName %>',
  })
  status: <%= moduleNamePascal %>StatusEnum;

  @Field(() => Boolean, {
    nullable: false,
    description: 'The is active of the <%= moduleName %>',
  })
  isActive: boolean;

  @Field(() => Date, {
    nullable: false,
    description: 'The created at of the <%= moduleName %>',
  })
  createdAt: Date;

  @Field(() => Date, {
    nullable: false,
    description: 'The updated at of the <%= moduleName %>',
  })
  updatedAt: Date;
}

@ObjectType('Paginated<%= moduleNamePascal %>ResultDto')
export class Paginated<%= moduleNamePascal %>ResultDto extends BasePaginatedResultDto {
  @Field(() => [<%= moduleNamePascal %>ResponseDto], {
    description: 'The <%= moduleName %>s in the current page',
  })
  items: <%= moduleNamePascal %>ResponseDto[];
}

