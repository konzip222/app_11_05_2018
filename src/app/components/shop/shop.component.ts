import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs';
import { ShopDataService } from '../../services/shop-data.service';
import { Product } from '../../shared/product.model';

async function getProduct(i) {
    let product = await this.avaibleProd;
    return product[i];
}

async function addItemAsync(index){
  this.testVal = 1;
    //this.tmpTest = getProduct(index);
    //let product = await this.avaibleProd;
    //this.basketProducts.push(product);
    //this._shopDataService.addProductToBasket(this.basketProducts);
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit, OnDestroy{

  public lastProductName$ : Observable<string>;
  public avaibleProd$ : Observable<Product[]>;
  public discountProducts$: Observable<Product[]>;
  public basket$: Observable<Product[]>;
//  public someVar =[];
//  public 

  constructor(private _shopDataService: ShopDataService) { 
    //_shopDataService.update();
    this.lastProductName$ = _shopDataService.avalibleProducts$.map( productList => productList.reduce( (acc, curr) => curr ).name );
    this.avaibleProd$ = _shopDataService.avalibleProducts$.map( productList => productList);
    this.discountProducts$ = _shopDataService.avalibleProducts$.map( productList => productList.filter(element => element.discount == true));
    this.basket$ = _shopDataService.basketProducts$.map(productList => productList);
  //  this.someVar = _shopDataService.avalibleProducts$.map( productList => productList);
   // this.cheapProducts$ = _shopDataService.product$.map( productList => productList.filter( product => product.prize > 1.00 ) );
    _shopDataService.avalibleProducts$.map(product => console.log(product));
  }

  amount = 0;
  basketProducts = [];
  //basketProducts : Product[];
  testVal = 0;
  itemCount = 0;
  tmpTest;

  async updateData(i){
    await this._shopDataService.update();
  }

/*
  async getValueFromArray(){
    let result = "";
    while(this.tmpTest==""){
      let obj = this.avaibleProd$[0];
      result = 
    }
    return result;
  }
  */
/*
    apple : Product = {
    name: "apple",
    category: "food",
    prize: 2.05,
    amount: 0,
  };
  banana : Product = {
    name: "banana",
    category: "food",
    prize: 2.10,
    amount: 0,
  };
  chicken : Product = {
    name: "chicken",
    category: "food",
    prize: 10.99,
    amount: 0,
  };  
  monitor : Product = {
    name: "monitor",
    category: "AGD",
    prize: 310.99,
    amount: 0,
  };
  keyboard : Product = {
    name: "keyboard",
    category: "AGD",
    prize: 49.99,
    amount: 0,
  };  
 

  products = [this.apple,this.banana,this.chicken,this.monitor,this.mouse,this.keyboard]*/;

  mouse : Product = {
    name: "mouse",
    category: "AGD",
    prize: 29.50,
    amount: 0,
    discount: true,
  };  

  ngOnInit() {
   setTimeout(() => {
       this._shopDataService.update();
    }, 0);
  }

  addItem(product) {
    this.basketProducts.push(product);
    this._shopDataService.addProductToBasket(this.basketProducts);
  }

  getData(){
    this._shopDataService.update();
  }

  removeItem(i) {
    this.basketProducts.splice(i, 1);
    this._shopDataService.changeProduct(this.basketProducts);
  }

  public ngOnDestroy() {
    //this._shopDataService.product.unsubscribe();
    //this._shopDataService.unsubscribe();
  }

}
