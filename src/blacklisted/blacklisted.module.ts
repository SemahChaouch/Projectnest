import { Module } from '@nestjs/common';
import { BlacklistedService } from './blacklisted.service';
import { BlacklistedController } from './blacklisted.controller';
import { BlacklistedSchema } from './schemas/blacklisted.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BlacklistedRepository } from './blacklisted.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Blacklisted', schema: BlacklistedSchema },
    ]),
  ],
  controllers: [BlacklistedController],
  providers: [BlacklistedService, BlacklistedRepository],
  exports: [BlacklistedService],
})
export class BlacklistedModule {}
