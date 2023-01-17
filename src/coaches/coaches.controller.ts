/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Coach } from './schemas/coach.schema';
import { CoachesService } from './coaches.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('coaches')
export class CoachesController {
  constructor(private readonly coachesService: CoachesService) {}

  @UseGuards(JwtGuard)
  @Get(':coachId')
  async getCoach(@Param('coachId') coachId: string): Promise<Coach> {
    return this.coachesService.getCoachById(coachId);
  }

  @UseGuards(JwtGuard)
  @Get()
  async getCoaches(): Promise<Coach[]> {
    return this.coachesService.getCoaches();
  }

  @UseGuards(JwtGuard)
  @Post()
  async createCoach(@Body() createCoachDTO: CreateCoachDto): Promise<Coach> {
    return this.coachesService.createCoach(createCoachDTO);
  }

  @UseGuards(JwtGuard)
  @Patch(':coachId')
  async updateCoach(
    @Param('id') id: string,
    @Body() updateCoachDTO: UpdateCoachDto,
  ): Promise<Coach> {
    return this.coachesService.updateCoach(id, updateCoachDTO);
  }

  @UseGuards(JwtGuard)
  @Delete(':coachId')
  async deleteCoach(@Param('coachId') coachId: string): Promise<Coach> {
    return this.coachesService.deleteCoach(coachId);
  }
}
