import { Field, InputType } from '@nestjs/graphql';
import { <%= moduleNamePascal %>StatusEnum } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType('<%= moduleNamePascal %>CreateRequestDto')
export class <%= moduleNamePascal %>CreateRequestDto {
  @Field(() => String, {
    description: 'The title of the <%= moduleName %>',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => String, {
    description: 'The description of the <%= moduleName %>',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  description: string | null;

  @Field(() => String, {
    description: 'The content of the <%= moduleName %>',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @Field(() => <%= moduleNamePascal %>StatusEnum, {
    description: 'The status of the <%= moduleName %>',
    nullable: false,
  })
  @IsEnum(<%= moduleNamePascal %>StatusEnum)
  @IsNotEmpty()
  status: <%= moduleNamePascal %>StatusEnum;
}

