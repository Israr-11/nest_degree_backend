import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()

export class Degree extends Document {
 
    @Prop()
    degreeName: String

    @Prop()
    gradeAchieved: String

    @Prop()
    batchRanking: Number

}

export const DegreeModel = SchemaFactory.createForClass(Degree)