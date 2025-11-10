import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType('<%= moduleNamePascal %>FindByIdRequestDto')
export class <%= moduleNamePascal %>FindByIdRequestDto {
  @Field(() => String, {
    description: 'The id of the <%= moduleName %>',
    nullable: false,
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;
}

