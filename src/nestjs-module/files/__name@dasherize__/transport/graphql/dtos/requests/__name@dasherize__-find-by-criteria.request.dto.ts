import { BaseFindByCriteriaInput } from '@/shared/transport/graphql/dtos/requests/base-find-by-criteria.input';
import { InputType } from '@nestjs/graphql';

@InputType('<%= moduleNamePascal %>FindByCriteriaRequestDto')
export class <%= moduleNamePascal %>FindByCriteriaRequestDto extends BaseFindByCriteriaInput {}

