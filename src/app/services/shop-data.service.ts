import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';
import { Product } from '../shared/product.model';
/*
interface product{
  name: string,
  prize: number,
  year: number,
}
*/
@Injectable()
export class ShopDataService {

  apple : Product = {
    name: "apple",
    category: "food",
    prize: 2.05,
    amount: 0,
    discount: true,    
  };
  banana : Product = {
    name: "banana",
    category: "food",
    prize: 2.10,
    amount: 0,
    discount: true,
  };
  chicken : Product = {
    name: "chicken",
    category: "food",
    prize: 10.99,
    amount: 0,
    discount: false,    
  };  
  monitor : Product = {
    name: "monitor",
    category: "AGD",
    prize: 310.99,
    amount: 0,
    discount: false,    
  };
  keyboard : Product = {
    name: "keyboard",
    category: "AGD",
    prize: 49.99,
    amount: 0,
    discount: true,    
  };  
  mouse : Product = {
    name: "mouse",
    category: "AGD",
    prize: 29.50,
    amount: 0,
    discount: true,
  };  
 // private goals = new BehaviorSubject<Product>([this.newProduct, this.newProduct, this.newProduct]); BehaviorSubject
  private avalibleProducts = new Subject<Product[]>();
//private avalibleProducts = new BehaviorSubject<any>([this.apple,this.banana,this.chicken,this.monitor,this.mouse,this.keyboard]);
  avalibleProducts$ = this.avalibleProducts.asObservable();

  private basketProducts = new Subject<Product[]>();
  basketProducts$ = this.basketProducts.asObservable();
  private tmp;

  avalibleProductsArray = [this.apple,this.banana,this.chicken,this.monitor,this.mouse,this.keyboard];

  constructor() {
   }

  changeProduct(product) {
    this.avalibleProducts.next(this.avalibleProductsArray);
    //this.products.next(product);
  }

  update(){
    this.avalibleProducts.next(this.avalibleProductsArray);
    this.basketProducts.next();    
  }

  updateBasket(){
    this.basketProducts.next(this.tmp);
  }  

  addProductToBasket(products){
    this.tmp = products;
    this.basketProducts.next(products);
  }

}
