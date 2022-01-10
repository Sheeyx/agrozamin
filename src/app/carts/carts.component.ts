import { Component, OnInit } from '@angular/core';
interface itemTest {

}

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.less']
})





export class CartsComponent implements OnInit {
  count = 0
  sum=0
  answers: itemTest[] = []
  myHide = false
  
  info = [{
      id: 0 ,
      img:'../../assets/img.png',
      name:'Бинафша Шоҳ Нўхати',
      saller:'Ташкент АгроФерма',
      place:'15, Бектемирский район, массив Олима Оширова, Ташкент, ',
      cost: 10199,
      killo:'килограмм',
      summasi:Number,
      count: 1,
    },
    {
      id: 1 ,
      img:"../../assets/images1.png",
      name:'Қизил лавлаги',
      saller:'Ташкент АгроФерма',
      place:null,
      cost: 6568 ,
      killo:'килограмм',
      summasi:0,
      count:2,
    },
    {
      id: 2 ,
      img:"../../assets/Rectangle 2358.png",
      name:'Яшил парракли укроп',
      saller:'Ташкент АгроФерма',
      place: '15, Бектемирский район, массив Олима Оширова, Ташкент, Узбекистан',
      cost: 1290 ,
      killo:'Упаковка',
      summasi:0,
      count:1,
    },
    {
      id: 3 ,
      img:"../../assets/carrot.png",
      name:'Рассия гигант сабзилари',
      saller:'Ташкент АгроФерма',
      place: null,
      cost: 15990132 ,
      killo:'Тонна',
      summasi:0,
      count:2,
    },{
      id: 4 ,
      img:'../../assets/img.png',
      name:'Бинафша Шоҳ Нўхати',
      saller:'Ташкент АгроФерма',
      place:'15, Бектемирский район, массив Олима Оширова, Ташкент, ',
      cost: 10199,
      killo:'килограмм',
      summasi:Number,
      count: 1,
    },
    {
      id: 5 ,
      img:"../../assets/images1.png",
      name:'Қизил лавлаги',
      saller:'Ташкент АгроФерма',
      place:null,
      cost: 6568 ,
      killo:'килограмм',
      summasi:0,
      count:2,
    },
    {
      id: 6 ,
      img:"../../assets/Rectangle 2358.png",
      name:'Яшил парракли укроп',
      saller:'Ташкент АгроФерма',
      place: '15, Бектемирский район, массив Олима Оширова, Ташкент, Узбекистан',
      cost: 1290 ,
      killo:'Упаковка',
      summasi:0,
      count:1,
    },
    {
      id: 7 ,
      img:"../../assets/carrot.png",
      name:'Рассия гигант сабзилари',
      saller:'Ташкент АгроФерма',
      place: null,
      cost: 15990132 ,
      killo:'Тонна',
      summasi:0,
      count:2,
    },{
      id: 8 ,
      img:'../../assets/img.png',
      name:'Бинафша Шоҳ Нўхати',
      saller:'Ташкент АгроФерма',
      place:'15, Бектемирский район, массив Олима Оширова, Ташкент, ',
      cost: 10199,
      killo:'килограмм',
      summasi:Number,
      count: 1,
    },
    {
      id: 9 ,
      img:"../../assets/images1.png",
      name:'Қизил лавлаги',
      saller:'Ташкент АгроФерма',
      place:null,
      cost: 6568 ,
      killo:'килограмм',
      summasi:0,
      count:2,
    },
    {
      id: 10 ,
      img:"../../assets/Rectangle 2358.png",
      name:'Яшил парракли укроп',
      saller:'Ташкент АгроФерма',
      place: '15, Бектемирский район, массив Олима Оширова, Ташкент, Узбекистан',
      cost: 1290 ,
      killo:'Упаковка',
      summasi:0,
      count:1,
    },
    {
      id: 11 ,
      img:"../../assets/carrot.png",
      name:'Рассия гигант сабзилари',
      saller:'Ташкент АгроФерма',
      place: null,
      cost: 15990132 ,
      killo:'Тонна',
      summasi:0,
      count:2,
    },{
      id: 12 ,
      img:'../../assets/img.png',
      name:'Бинафша Шоҳ Нўхати',
      saller:'Ташкент АгроФерма',
      place:'15, Бектемирский район, массив Олима Оширова, Ташкент, ',
      cost: 10199,
      killo:'килограмм',
      summasi:Number,
      count: 1,
    },
    {
      id: 13 ,
      img:"../../assets/images1.png",
      name:'Қизил лавлаги',
      saller:'Ташкент АгроФерма',
      place:null,
      cost: 6568 ,
      killo:'килограмм',
      summasi:0,
      count:2,
    },
    {
      id: 14 ,
      img:"../../assets/Rectangle 2358.png",
      name:'Яшил парракли укроп',
      saller:'Ташкент АгроФерма',
      place: '15, Бектемирский район, массив Олима Оширова, Ташкент, Узбекистан',
      cost: 1290 ,
      killo:'Упаковка',
      summasi:0,
      count:1,
    },
    {
      id: 15 ,
      img:"../../assets/carrot.png",
      name:'Рассия гигант сабзилари',
      saller:'Ташкент АгроФерма',
      place: null,
      cost: 15990132 ,
      killo:'Тонна',
      summasi:0,
      count:2,
    }
  ]

  constructor() { }
  id = Number

  ngOnInit(): void {
    for(let i = 0;i<this.info.length;i++) {
      this.info[i].summasi = this.info[i].cost*this.info[i].count
      this.sum = this.sum + Number(this.info[i].summasi)
      this.answers.push(this.info[i])
      console.log(this.info);
      
      
      
  }
  console.log(this.info);
  

    // for(let i = 0;i<this.info.length;i++) {
    //   this.arr.push(this.info[i])
    // }
  }

  

  Calc(id: any, type:String){
    console.log('button id:',id);
    console.log(this.info);
    
    this.count = this.info[id].count
    if(type=== 'prev'){
      if(this.count >1){
        this.count--
      }
    } else if(type==='next'){
      this.count++
    }
    this.info[id].count = this.count
    console.log(this.count);
    console.log(this.info[id].count);
    this.info[id].summasi = this.info[id].cost*this.info[id].count
    this.UmmumiySum()
    
  }

  UmmumiySum(){
    this.sum = 0
    for(let i = 0;i<this.info.length;i++) {
      this.sum += Number(this.info[i].summasi)
      // this.sum = this.sum + Number(this.info[i].summasi)
    }
  }

  delete(id:any){
    this.info = this.info.filter(e => e.id !== id)
    console.log(this.info);
    
    // this.info.slice(id,1)
    this.UmmumiySum() 
  }

  Orders(){
    this.info = []
    this.myHide = true
    console.log('helo');
    
  }


  


}
