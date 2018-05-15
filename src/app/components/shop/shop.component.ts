import { Component, OnInit } from '@angular/core';
import { ShopDataService } from '../../services/shop-data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private _shopDataService: ShopDataService) { }

  goals = [];
  goalText = "Some text";
  itemCount = 0;

  ngOnInit() {
    this._shopDataService.goal.subscribe(res => this.goals = res);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText += this.itemCount;
    this._shopDataService.changeGoal(this.goals);
    this.itemCount = this.goals.length;    
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._shopDataService.changeGoal(this.goals);
  }

}
