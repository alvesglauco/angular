import { Injectable } from '@angular/core';
import { Produto } from './product';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loggerService: LoggerService) {
    this.loggerService.log("ProductService foi construido");
   }

  public getProdutos() {
    let produtos:Produto[];
    produtos = [
    new Produto(1,'Quadro Mestre Yoda',199),
    new Produto(2,'Mascara Darth Vader',159),
    new Produto(3,'Lightsaber',89)
    ]
    return produtos;
    }
}

