import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DegreeController } from './controllers/degree.controller';
import { DegreeService } from './services/degree.service';
import { DegreeModel, Degree } from './models/degree.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Degree.name, schema: DegreeModel }])
  ],
  controllers: [DegreeController],
  providers: [DegreeService],
})
export class DegreeModule {}
