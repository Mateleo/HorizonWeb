import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { OPAQUE_HEX_COLOR_REGEX } from '../../shared/lib/constants';

export class CreateTagDto {
  @Length(1, 50)
  @IsString()
  name: string;

  @IsNotEmpty()
  @Matches(OPAQUE_HEX_COLOR_REGEX)
  @Transform(({ value }: { value: string }) => (value.startsWith('#') ? value.slice(1) : value))
  color: string;

  @IsOptional()
  @IsString()
  description?: string;
}
