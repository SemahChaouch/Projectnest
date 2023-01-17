import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerrainsModule } from './terrains/terrains.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BlacklistedModule } from './blacklisted/blacklisted.module';
import { CoachesController } from './coaches/coaches.controller';
import { CoachesModule } from './coaches/coaches.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    TerrainsModule,
    AuthModule,
    UsersModule,
    BlacklistedModule,
    CoachesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
