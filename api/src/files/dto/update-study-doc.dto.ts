import { PartialType } from '@nestjs/mapped-types';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateStudyDocDto } from './create-study-doc.dto';

export class UpdateStudyDocDto extends PartialType(CreateStudyDocDto) {
  @IsOptional()
  @IsInt()
  year?: number;

  @IsString()
  subject: string;

  @IsNumber()
  docSeries: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
