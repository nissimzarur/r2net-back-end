import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Diamonds extends Document {
  @Prop()
  @Field()
  _id: string;

  @Prop()
  @Field()
  price: number;

  @Prop()
  @Field()
  shape: string;

  @Prop()
  @Field()
  color: string;

  @Prop()
  @Field()
  clarity: string;

  @Prop()
  @Field()
  carat: number;

  @Prop()
  @Field()
  cut: string;

  @Prop()
  @Field()
  isLabDiamond: boolean;
}

@ObjectType()
export class PaginatedDiamonds {
  @Field(() => [Diamonds])
  items: Diamonds[];

  @Field(() => Int)
  total: number;
}

export const DiamondSchema = SchemaFactory.createForClass(Diamonds);
