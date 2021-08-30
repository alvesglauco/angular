import { Injectable } from '@angular/core';
import { Produto } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
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

