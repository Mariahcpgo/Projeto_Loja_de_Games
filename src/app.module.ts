import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './Produto/Entities/produto.entity';
import { ProdutoModule } from './Produto/produto.module';
import { Categoria } from './Categoria/Entities/categoria.entity';
import { CategoriaModule } from './Categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_lojadegames',
      entities: [Produto, Categoria],
      synchronize: true,
    }),
    ProdutoModule, CategoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
