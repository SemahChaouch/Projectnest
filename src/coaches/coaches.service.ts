/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { CreateCoachDto } from './dto/create-coach.dto';
import { Coach } from './schemas/coach.schema';
import { CoachRepository } from './coach.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CoachesService {
  constructor(private readonly coachRepository: CoachRepository) {}

  async getCoachById(coachId: string): Promise<Coach> {
    return this.coachRepository.findOne({ id: coachId });
  }

  async getCoaches(): Promise<Coach[]> {
    return this.coachRepository.find({});
  }

  async createCoach(createCoachDto: CreateCoachDto): Promise<Coach> {
    return this.coachRepository.create({
      id: uuidv4(),
      ...createCoachDto,
    });
  }

  async updateCoach(
    coachId: string,
    coachUpdates: UpdateCoachDto,
  ): Promise<Coach> {
    return this.coachRepository.findOneAndUpdate({ coachId }, coachUpdates);
  }
  async deleteCoach(coachId: string): Promise<Coach> {
    return this.coachRepository.findOneAndDelete({ coachId });
  }
  async count(options) {
    return this.coachRepository.count(options);
  }
}
