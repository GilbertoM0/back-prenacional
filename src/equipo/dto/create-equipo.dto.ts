import { IsString } from "class-validator";

export class CreateEquipoDto {
    @IsString()
    public name: string;
    @IsString()
    public ciudad: string;
    @IsString()
    public diciplina: string;
    @IsString()
    public img: string;


}
   