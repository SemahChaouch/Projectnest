import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BlacklistedService } from './blacklisted.service';
import { CreateBlacklistedDto } from './dto/create-blacklisted.dto';

@Controller('blacklisted')
export class BlacklistedController {
  constructor(private readonly blacklistedService: BlacklistedService) {}

  @Post()
  create(@Body() createBlacklistedDto: CreateBlacklistedDto) {
    return this.blacklistedService.create(createBlacklistedDto);
  }

  @Get()
  findAll() {
    return this.blacklistedService.findAll();
  }

  @Get(':jwt')
  findOne(@Param('jwt') jwt: string) {
    return this.blacklistedService.findOne(jwt);
  }
}
