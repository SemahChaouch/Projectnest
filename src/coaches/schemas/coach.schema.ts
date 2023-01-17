/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type CoachDocument = Coach & Document;
@Schema()
export class Coach {
  @Prop({
    required: true,
    unique: true,
  })
  id: string;
  @Prop({
    required: true,
  })
  firstname: string;
  @Prop({
    required: true,
  })
  lastname: string;
  @Prop({
    required: true,
  })
  description: string;
  @Prop({
    required: true,
  })
  sport: number;
  @Prop({
    required: true,
  })
  age: number;
  @Prop({
    required: true,
  })
  phone: string;

  @Prop({
    required: true,
  })
  image: string;
}
export const CoachSchema = SchemaFactory.createForClass(Coach);
