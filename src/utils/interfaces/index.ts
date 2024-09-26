export enum ShapeEnum {
  ROUND = 'Round',
  PRINCESS = 'Princess',
  RADIANT = 'Radiant',
  ALL = 'All',
}

export interface IPagination {
  limit: number;
  offset: number;
}
