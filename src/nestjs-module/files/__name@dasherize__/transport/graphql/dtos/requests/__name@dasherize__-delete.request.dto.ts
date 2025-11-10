import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType('<%= moduleNamePascal %>DeleteRequestDto')
export class <%= moduleNamePascal %>DeleteRequestDto {
  @Field(() => String, {
    description: 'The id of the <%= moduleName %>',
    nullable: false,
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;
}

