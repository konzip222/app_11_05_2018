import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopDataService } from '../../services/shop-data.service';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  public basketProducts : Observable<Product[]>;

  constructor(private _shopDataService: ShopDataService) {
      this.basketProducts = _shopDataService.basketProducts$.map( productList => productList);    
   }

//  basketContent = [];
  goalText = "Some text";
  itemCount = 0;
  prizeArray = [];
  sumResult : any;
  basketContent = [];
  myJSON = JSON.stringify(this.basketContent);

  ngOnInit() {
    setInterval(() => {
      this.myJSON = JSON.stringify(this.basketContent);
    }, 1000);
  //  this._shopDataService.basketProducts$.subscribe(res => this.basketContent = res);
    /* var myJSON = JSON.stringify(obj);
    setInterval(() => {
      this.calculatePrize(this.basketContent);
    }, 1000);   */ 
  }
/*
  addItem() {
    this.basketContent.push(this.goalText);
    this.goalText += this.itemCount;
    this._shopDataService.changeProduct(this.basketContent);
    this.itemCount = this.basketContent.length;    
  }

  removeItem(i) {
    this.basketContent.splice(i, 1);
    this._shopDataService.changeProduct(this.basketContent);
  }

  calculatePrize(basketCont :Product[]){
    let getPrize = element => element.prize*element.amount;
    let calculateSum = (prev, curr, currIndex) => prev + curr;
    this.sumResult = this.basketContent.map(getPrize).reduce(calculateSum,0);
  }
*/
  getPrize(product :Product){
    return product.prize*product.amount;
  }

  getData(){
    this._shopDataService.updateBasket();
  }
/*
  calculateProductPrize(prize, amount){
  }*/
}
