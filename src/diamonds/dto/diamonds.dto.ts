import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsBoolean, Min, IsEnum } from 'class-validator';
import { ShapeEnum } from 'src/utils/interfaces';

@InputType()
export class DiamondDto {
  @Field()
  @IsNotEmpty()
  @IsEnum(ShapeEnum)
  readonly shape: ShapeEnum;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  readonly price: number;

  @Field()
  @IsNotEmpty()
  @IsBoolean()
  readonly isLabDiamond: boolean;
}
