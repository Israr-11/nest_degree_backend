export class CreateDegreeDto {
    readonly degreeName: string;
    readonly gradeAchieved: string;
    readonly batchRanking:Number
    // Other properties as needed
  }
  
  export class UpdateDegreeDto {
    readonly degreeName?: string;
    readonly gradeAchieved?: string;
    readonly batchRanking?:Number
  }
  