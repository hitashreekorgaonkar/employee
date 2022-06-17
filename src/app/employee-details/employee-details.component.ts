import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeId: string;
  employeeDetail = [];
  employee: any;

  constructor(
    private route: ActivatedRoute,
    private userServiceService: UserServiceService,
  ) { }


  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params["id"];
    console.log("od", this.employeeId);
    this.employeeDetails(this.employeeId);
  }


  employeeDetails(employeeId) {
    this.userServiceService.getEmployeesDetails(employeeId).subscribe(
      (res: any) => {
        this.employeeDetail = res;
        console.log("employeeDetail", this.employeeDetail[0]);
        this.employee = this.employeeDetail[0];
        console.log(this.employee);

      }),
      err => {
        console.log("err", err);
      }
  }



}
