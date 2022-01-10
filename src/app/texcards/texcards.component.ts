import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texcards',
  templateUrl: './texcards.component.html',
  styleUrls: ['./texcards.component.less']
})
export class TexcardsComponent implements OnInit {

  data=[
    {name:"hello",checked:false},
    {name:"null",checked:true},
    {name:"es",checked:false},
  ]
  constructor() { 

    console.log(this.data.filter((el)=> el.checked===true));
    
  }

  ngOnInit(): void {

  }

}
