import { UsersService } from './users.service';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserDetails } from './user-details.interface';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  //protect route with jwt token
  @UseGuards(JwtGuard)
  @Get(':id')
  getUserById(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }
}
