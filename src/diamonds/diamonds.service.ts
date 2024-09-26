import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Diamonds } from './diamonds.schema';
import { InjectModel } from '@nestjs/mongoose';
import { IPagination } from 'src/utils/interfaces';
import { IDiamondsFilter } from './interfaces';

@Injectable()
export class DiamondsService {
  constructor(
    @InjectModel(Diamonds.name) private diamondModel: Model<Diamonds>,
  ) {}

  async findAll(
    filter: Partial<IDiamondsFilter>,
    pagination: IPagination,
  ): Promise<[Diamonds[], number]> {
    const items = await this.diamondModel
      .find()
      .where({
        ...filter,
      })
      .skip(pagination.offset)
      .limit(pagination.limit)
      .exec();

    const total = await this.diamondModel
      .countDocuments()
      .where({
        ...filter,
      })
      .exec();

    return [items, total];
  }
}
