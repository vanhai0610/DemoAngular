import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-demologin',
  templateUrl: './demologin.component.html',
  styleUrls: ['./demologin.component.scss']
})
export class DemologinComponent implements OnInit {

  constructor(private _common: CommonService) {
   }

  ngOnInit(): void {
  }

  public loginForm = new FormGroup({
    username: new FormControl(this._common.username),
    password: new FormControl(this._common.password)
  });
  public Login(){
    this._common.username = this.loginForm.value.username;
    this._common.password = this.loginForm.value.password;
  }
}
