import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: "employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  ngOnInit() {}

  getSalaryColor(employee) {
    return employee.salary > 10000 ? "green" : "red";
  }
}
