import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { get } from "http";
import { Produto } from "../Entities/produto.entity";
import { ProdutoService } from "../Services/produto.service";

@Controller("/produtos")
export class ProdutoController{

    constructor(private readonly produtoService: ProdutoService) {}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]>{
        return this.produtoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto>{
        return this.produtoService.findById(id);
    }

    @Get('/:titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Produto[]>{
        return this.produtoService.findByNome(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.create(produto);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.update(produto);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.produtoService.delete(id);
    }

    @Get('/maior-que/:preco')
    @HttpCode(HttpStatus.OK)
    findByMaiorQue(@Param('preco') preco: number): Promise<Produto[]> {
        return this.produtoService.findByMaiorQue(preco);
    }
}
