import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-orders',
  templateUrl: './cart-orders.component.html',
  styleUrls: ['./cart-orders.component.less']
})
export class CartOrdersComponent implements OnInit {

  info = [
    {
    id: 0 ,
    img:'../../assets/img.png',
    name:'Бинафша Шоҳ Нўхати',
    saller:'Ташкент АгроФерма',
    place:'15, Бектемирский район, массив Олима Оширова, Ташкент, ',
    cost: 10199,
    killo:'килограмм',
    summasi:10199,
  },
  {
    id: 1 ,
    img:"../../assets/images1.png",
    name:'Қизил лавлаги',
    saller:'Ташкент АгроФерма',
    place:null,
    cost: 6568 ,
    killo:'килограмм',
    summasi:13136,
  },
  {
    id: 2 ,
    img:"../../assets/Rectangle 2358.png",
    name:'Яшил парракли укроп',
    saller:'Ташкент АгроФерма',
    place: '15, Бектемирский район, массив Олима Оширова, Ташкент, Узбекистан',
    cost: 1290 ,
    killo:'Упаковка',
    summasi:1290,
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
