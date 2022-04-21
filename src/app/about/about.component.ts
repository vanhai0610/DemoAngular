import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public age;

  constructor(private _common: CommonService) { 
    this.age = _common.age;
  }

  ngOnInit(): void {
  }
  public TangTuoi(){
    this._common.age++;
    this.age = this._common.age;
  };

}
