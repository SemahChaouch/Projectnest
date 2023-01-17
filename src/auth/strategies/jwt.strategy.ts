/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { jwtConstants } from '../constants';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { BlacklistedService } from 'src/blacklisted/blacklisted.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private blacklistedService: BlacklistedService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    const token = ExtractJwt.fromAuthHeaderAsBearerToken();
    if (this.blacklistedService.findOne(token)) {
      console.log(this.blacklistedService.findOne(token))
      return { error: 'unauthorized' };
    }
    return { ...payload.user };
  }
}
