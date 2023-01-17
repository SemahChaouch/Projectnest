/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateTerrainDto } from './dto/update-terrain.dto';
import { CreateTerrainDto } from './dto/create-terrain.dto';
import { Terrain } from './schemas/terrain.schema';
import { TerrainRepository } from './terrain.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TerrainsService {
  constructor(private readonly terrainRepository: TerrainRepository) {}

  async getTerrainById(terrainId: string): Promise<Terrain> {
    return this.terrainRepository.findOne({ id: terrainId });
  }

  async getTerrains(): Promise<Terrain[]> {
    return this.terrainRepository.find({});
  }

  async createTerrain(createTerrainDto: CreateTerrainDto): Promise<Terrain> {
    return this.terrainRepository.create({
      id: uuidv4(),
      ...createTerrainDto,
    });
  }

  async updateTerrain(
    terrainId: string,
    terrainUpdates: UpdateTerrainDto,
  ): Promise<Terrain> {
    return this.terrainRepository.findOneAndUpdate(
      { terrainId },
      terrainUpdates,
    );
  }
  async deleteTerrain(terrainId: string): Promise<Terrain> {
    return this.terrainRepository.findOneAndDelete({ terrainId });
  }
  async count(options) {
    return this.terrainRepository.count(options);
  }
}
