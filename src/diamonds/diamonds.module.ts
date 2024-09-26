import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Diamonds, DiamondSchema } from './diamonds.schema';
import { DiamondsService } from './diamonds.service';
import { DiamondsResolver } from './diamonds.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Diamonds.name, schema: DiamondSchema }]),
  ],
  controllers: [],
  providers: [DiamondsService, DiamondsResolver],
  exports: [],
})
export class DiamondsModule {}
