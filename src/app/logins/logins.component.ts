import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss']
})
export class LoginsComponent implements OnInit {
  public username = '';
  public password = '';
  public students = ['Hải', 'Hùng', 'Nam'];
  constructor() { }

  ngOnInit(): void {
  }
  public GetStudent(event){
    console.log(event.target.value);
  }

  public onSubmit(){
    console.log(this.username);
    console.log(this.password);
  };

}
