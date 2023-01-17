import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoachRepository } from './coach.repository';
import { CoachesController } from './coaches.controller';
import { CoachesService } from './coaches.service';
import { CoachSchema } from './schemas/coach.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Coach', schema: CoachSchema }]),
  ],
  controllers: [CoachesController],
  providers: [CoachesService, CoachRepository],
})
export class CoachesModule {}
