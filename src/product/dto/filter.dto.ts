import { IsNumber, IsOptional, IsString } from "class-validator";


export class FilterDTO{
  @IsOptional()
  @IsString()
    productName:string;

    @IsOptional()
    @IsNumber()
    maxPrice:number;

    @IsOptional()
    @IsNumber()
    minPrice:number;

    @IsOptional()
    @IsString()
    brand:string;

    @IsOptional()
    @IsNumber()
    overAllRating:number;
}