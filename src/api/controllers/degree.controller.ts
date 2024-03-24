import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DegreeService } from '../services/degree.service';
import { CreateDegreeDto, UpdateDegreeDto } from '../dto/degree.dto';
import { Degree } from '../models/degree.model';

@Controller('degrees')
export class DegreeController {
    constructor(private readonly degreeService: DegreeService) { }

    @Get()
    async findAll(): Promise<Degree[]> {
        return this.degreeService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Degree> {
        return this.degreeService.findById(id);
    }

    @Post()
    async create(@Body() createDegreeDto: CreateDegreeDto): Promise<Degree> {
        return this.degreeService.create(createDegreeDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDegreeDto: UpdateDegreeDto): Promise<Degree> {
        return this.degreeService.update(id, updateDegreeDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.degreeService.delete(id);
    }
}
