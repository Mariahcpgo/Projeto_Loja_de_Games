import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./Entities/produto.entity";
import { ProdutoService } from "./Services/produto.service";
import { ProdutoController } from "./Controllers/produto.controller";
import { CategoriaService } from "src/Categoria/Services/categoria.service";
import { CategoriaModule } from "src/Categoria/categoria.module";


@Module({

    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})

export class ProdutoModule { }