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

  ngOnInit() {
    this._shopDataService.goal.subscribe(res => this.goals = res);
  }

}
