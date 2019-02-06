import { Component, OnInit } from "@angular/core";
import { EmployeeService, Employee } from "../services/employee.service";

@Component({
  selector: "employee-new",
  templateUrl: "./employee-new.component.html",
  styleUrls: ["./employee-new.component.scss"]
})
export class EmployeeNewComponent implements OnInit {
  employee: Employee = {
    name: "Felipe",
    salary: 0,
    bonus: 0
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  addEmployee() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
  }
}
