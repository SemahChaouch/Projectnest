/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { CreateTerrainDto } from './dto/create-terrain.dto';
import { UpdateTerrainDto } from './dto/update-terrain.dto';
import { Terrain } from './schemas/terrain.schema';
import { TerrainsService } from './terrains.service';

@Controller('terrains')
export class TerrainsController {
  constructor(private readonly terrainService: TerrainsService) {}

  @UseGuards(JwtGuard)
  @Get(':terrainId')
  async getTerrain(@Param('terrainId') terrainId: string): Promise<Terrain> {
    return this.terrainService.getTerrainById(terrainId);
  }

  @UseGuards(JwtGuard)
  @Get()
  async getTerrains(): Promise<Terrain[]> {
    return this.terrainService.getTerrains();
  }

  @UseGuards(JwtGuard)
  @Post()
  async createTerrain(
    @Body() createTerrainDTO: CreateTerrainDto,
  ): Promise<Terrain> {
    return this.terrainService.createTerrain(createTerrainDTO);
  }

  @UseGuards(JwtGuard)
  @Patch(':terrainId')
  async updateTerrain(
    @Param('id') id: string,
    @Body() updateTerrainDTO: UpdateTerrainDto,
  ): Promise<Terrain> {
    return this.terrainService.updateTerrain(id, updateTerrainDTO);
  }
  
  @UseGuards(JwtGuard)
  @Delete(':terrainId')
  async deleteTerrain(@Param('terrainId') terrainId: string): Promise<Terrain> {
    return this.terrainService.deleteTerrain(terrainId);
  }
}
