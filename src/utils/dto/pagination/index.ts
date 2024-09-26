import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class PaginationDto {
  @Field((type) => Int, { defaultValue: 0 })
  @IsInt()
  @Min(0)
  offset: number;

  @Field((type) => Int, { defaultValue: 10 })
  @IsInt()
  @Min(10)
  limit: number;
}
