import { Resolver, Query, Args } from '@nestjs/graphql';
import { Diamonds, PaginatedDiamonds } from './diamonds.schema';
import { DiamondsService } from './diamonds.service';
import { Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import cacheKeys from 'src/utils/cache-keys';
import { Cache } from 'cache-manager';
import { DiamondDto } from './dto/diamonds.dto';
import { PaginationDto } from 'src/utils/dto/pagination';
import { IDiamondsFilter } from './interfaces';
import filterDiamondsBuilder from './helpers/filter-diamonds-builder.helper';

@Resolver(() => Diamonds)
export class DiamondsResolver {
  constructor(
    private readonly diamondsService: DiamondsService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Query(() => PaginatedDiamonds, { name: 'fetchDiamonds' })
  async fetchDiamonds(
    @Args('filterDiamonds') dto: DiamondDto,
    @Args('pagination') paginationDto: PaginationDto,
  ): Promise<PaginatedDiamonds> {
    const key = cacheKeys.generateKey({
      tool: 'diamonds',
      ...paginationDto,
      ...dto,
    });

    const values = await this.cacheManager.get(key);

    if (values) return values;

    const filterDiamonds: IDiamondsFilter = filterDiamondsBuilder(dto);

    const [items, total] = await this.diamondsService.findAll(
      filterDiamonds,
      paginationDto,
    );

    await this.cacheManager.set(key, { items, total }, { ttl: 600 });

    return { items, total };
  }
}
