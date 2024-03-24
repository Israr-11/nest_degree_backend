import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Degree } from "../models/degree.model";
import { CreateDegreeDto, UpdateDegreeDto } from "../dto/degree.dto";


@Injectable()

export class DegreeService {
    constructor(@InjectModel(Degree.name) private readonly degreeModel: Model<Degree>) { }

    async findAll(): Promise<Degree[]> {
        return this.degreeModel.find().exec();
    }

    async findById(id: String): Promise<Degree> {
        return this.degreeModel.findById(id).exec();
    }

    async create(createDegreeDto: CreateDegreeDto): Promise<Degree> {
        const newDegree = new this.degreeModel(createDegreeDto);
        return newDegree.save();
    }

    async update(id: string, updateDegreeDto: UpdateDegreeDto): Promise<Degree> {
        return this.degreeModel.findByIdAndUpdate(id, updateDegreeDto, { new: true }).exec();
    }

    async delete(id: string): Promise<void> {
        await this.degreeModel.findByIdAndDelete(id).exec();
    }
}