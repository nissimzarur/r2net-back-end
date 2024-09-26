import { ShapeEnum } from 'src/utils/interfaces';
import { DiamondDto } from '../dto/diamonds.dto';
import { IDiamondsFilter } from '../interfaces';

function filterDiamondsBuilder(dto: DiamondDto): IDiamondsFilter {
  const filterDiamonds: IDiamondsFilter = {
    shape: dto.shape.toLowerCase() as ShapeEnum,
    price: dto.price,
    isLabDiamond: dto.isLabDiamond,
  };

  if (dto.shape === ShapeEnum.ALL) {
    delete filterDiamonds.shape;
  }

  if (dto.price === 0) {
    delete filterDiamonds.price;
  }
  return filterDiamonds;
}

export default filterDiamondsBuilder;
