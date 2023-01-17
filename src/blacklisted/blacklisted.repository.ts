/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blacklisted, BlacklistedDocument } from './schemas/blacklisted.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class BlacklistedRepository {
  constructor(
    @InjectModel(Blacklisted.name)
    private blacklistedModel: Model<BlacklistedDocument>,
  ) {}

  async find(
    blacklistedFilterQuery: FilterQuery<Blacklisted>,
  ): Promise<Blacklisted[]> {
    return this.blacklistedModel.find(blacklistedFilterQuery);
  }
  async findOne(
    blacklistedFilterQuery: FilterQuery<Blacklisted>,
  ): Promise<Blacklisted> {
    return this.blacklistedModel.findOne(blacklistedFilterQuery);
  }

  async create(blacklisted: Blacklisted): Promise<Blacklisted> {
    const newUser = new this.blacklistedModel(blacklisted);
    return newUser.save();
  }
}
