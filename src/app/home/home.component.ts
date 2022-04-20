import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'hải';
  public age = 15;
  public students = ['Hải', 'Hùng', 'Nam'];
  constructor() { }

  ngOnInit(): void {
  }

  public TangTuoi(){
    this.age = this.age + 1;
    if(this.age === 20){
        this.name = 'Nguyễn Văn Hải';
    };
  };
}
