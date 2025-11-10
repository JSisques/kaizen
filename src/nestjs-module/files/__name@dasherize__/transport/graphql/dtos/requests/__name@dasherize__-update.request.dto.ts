import { Field, InputType } from '@nestjs/graphql';
import { <%= moduleNamePascal %>StatusEnum } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

@InputType('<%= moduleNamePascal %>UpdateRequestDto')
export class <%= moduleNamePascal %>UpdateRequestDto {
  @Field(() => String, {
    description: 'The id of the <%= moduleName %>',
    nullable: false,
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @Field(() => String, {
    description: 'The title of the <%= moduleName %>',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  title?: string;

  @Field(() => String, {
    description: 'The description of the <%= moduleName %>',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  description?: string | null;

  @Field(() => String, {
    description: 'The content of the <%= moduleName %>',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  content?: string;

  @Field(() => <%= moduleNamePascal %>StatusEnum, {
    description: 'The status of the <%= moduleName %>',
    nullable: true,
  })
  @IsEnum(<%= moduleNamePascal %>StatusEnum)
  @IsOptional()
  status?: <%= moduleNamePascal %>StatusEnum;
}

