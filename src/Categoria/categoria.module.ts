import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaController } from "./Controllers/categoria.controller";
import { Categoria } from "./Entities/categoria.entity";
import { CategoriaService } from "./Services/categoria.service";

@Module({

    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [TypeOrmModule]
})

export class CategoriaModule { }