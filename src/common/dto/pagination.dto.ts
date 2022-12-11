import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // enable type conversion
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number) // enable type conversion
  offset?: number;
}
