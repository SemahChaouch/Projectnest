/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type BlacklistedDocument = Blacklisted & Document;
@Schema()
export class Blacklisted {
  @Prop({ required: true })
  jwt: string;
}

export const BlacklistedSchema = SchemaFactory.createForClass(Blacklisted);
