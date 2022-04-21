import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'hải';
  public age;
  public students = ['Hải', 'Hùng', 'Nam'];
  constructor( private _common: CommonService) {
    this.age = _common.age;
   }

  ngOnInit(): void {
  }

  public TangTuoi(){
    this._common.age++;
    this.age = this._common.age;
    if(this.age === 20){
        this.name = 'Nguyễn Văn Hải';
    };
  };
}
