/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Coach, CoachDocument } from './schemas/Coach.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class CoachRepository {
  constructor(
    @InjectModel(Coach.name) private coachModel: Model<CoachDocument>,
  ) {}
  async findOne(CoachFilterQuery: FilterQuery<Coach>): Promise<Coach> {
    return this.coachModel.findOne(CoachFilterQuery);
  }

  async find(CoachFilterQuery: FilterQuery<Coach>): Promise<Coach[]> {
    return this.coachModel.find(CoachFilterQuery);
  }

  async create(Coach: Coach): Promise<Coach> {
    const newCoach = new this.coachModel(Coach);
    return newCoach.save();
  }

  async findOneAndUpdate(
    CoachFilterQuery: FilterQuery<Coach>,
    Coach: Partial<Coach>,
  ): Promise<Coach> {
    return this.coachModel.findOneAndUpdate(CoachFilterQuery, Coach, {
      new: true,
    });
  }
  async findOneAndDelete(CoachFilterQuery: FilterQuery<Coach>): Promise<Coach> {
    return this.coachModel.findOneAndDelete(CoachFilterQuery);
  }
  async count(options) {
    return this.coachModel.count(options).exec();
  }
}
