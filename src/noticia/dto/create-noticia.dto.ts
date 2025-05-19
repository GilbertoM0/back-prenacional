    import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsString } from "class-validator";
    
    export class CreateNoticiaDto {
            @IsDate()
            @Type(() => Date)
            public fecha: Date;
            @IsString()
            public imagen: string;
            @IsString()
            public contenido: string;
            @IsBoolean()
            @Type(() => Boolean)
            public activo: boolean;
    }
    

