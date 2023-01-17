import { PartialType } from '@nestjs/mapped-types';
import { CreateBlacklistedDto } from './create-blacklisted.dto';

export class UpdateBlacklistedDto extends PartialType(CreateBlacklistedDto) {}
