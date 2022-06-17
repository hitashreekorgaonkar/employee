import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeesList = [];
  p: number = 1;
  totalRecords: number;
  from: number = 1;
  public limit: number = 5;

  constructor(
    private userServiceService: UserServiceService,
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.userServiceService.getEmployeesList().subscribe(
      (res: any) => {

        if (this.p <= 1) {
          this.from = 1;
          this.p = 1;
        } else {
          this.from = (this.p - 1) * this.limit + 1;
        }

        this.employeesList = res;
        console.log("employeesList", this.employeesList);
        this.totalRecords = this.employeesList.length
      }),
      err => {
        console.log("err", err);
      }
  }

  public pageChangeEvent(page: number): void {
    this.p = page;
    this.getEmployees();
  }

  pageChanged(event) {
    this.p = event;
    this.getEmployees();
  }

}
