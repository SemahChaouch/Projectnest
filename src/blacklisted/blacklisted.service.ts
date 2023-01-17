import { Injectable } from '@nestjs/common';
import { BlacklistedRepository } from './blacklisted.repository';
import { CreateBlacklistedDto } from './dto/create-blacklisted.dto';
import { Blacklisted } from './schemas/blacklisted.schema';

@Injectable()
export class BlacklistedService {
  constructor(private readonly blacklistedRepository: BlacklistedRepository) {}

  async create(
    createBlacklistedDto: CreateBlacklistedDto,
  ): Promise<Blacklisted> {
    return this.blacklistedRepository.create(createBlacklistedDto);
  }

  async findAll(): Promise<Blacklisted[]> {
    return this.blacklistedRepository.find({});
  }

  async findOne(jwt: any): Promise<Blacklisted> {
    return this.blacklistedRepository.findOne({ jwt: jwt });
  }
}
