import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaService } from "./Services/categoria.service";
import { CategoriaController } from "./Controllers/categoria.controller";
import { Categoria } from "./Entities/categoria.entity";


@Module({

    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [TypeOrmModule]
})

export class CategoriaModule { }