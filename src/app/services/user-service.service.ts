import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl = "https://retoolapi.dev/";

  constructor(
    private http: HttpClient
  ) { }

  userLogin(userId, userPwd) {
    return this.http.get<any>(this.baseUrl + "B13laa/getusers?user_id=" + userId + "&password=" + userPwd).pipe(map((res: any) => {
      return res
    }));
  }

  getEmployeesList() {
    return this.http.get<any>(this.baseUrl + "GFHqAV/getemployees");
  }

  getEmployeeInfo(empId) {
    return this.http.get<any>(this.baseUrl + "GFHqAV/getemployees/" + empId);
  }

  getEmployeesDetails(empId) {
    return this.http.get<any>(this.baseUrl + "H2F0Ui/getemployedetail?id=" + empId);
  }



}
