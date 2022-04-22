import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  public students = ['Hải', 'Hùng', 'Nam'];
  ngOnInit(): void {
  }
  public profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    students: new FormControl()
  });
  public onSubmit(){
    console.log('username : ' + this.profileForm.value.username);
    console.log('password : ' + this.profileForm.value.password);
    console.log('students : ' + this.profileForm.value.students);
  }
}
