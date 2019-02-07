import {Component, OnInit} from '@angular/core';
import {EmployeeService, Employee} from '../services/employee.service';

@Component({
    selector: 'employee-new-modal',
    templateUrl: './employee-new-modal.component.html',
    styleUrls: ['./employee-new-modal.component.scss']
})
export class EmployeeNewModalComponent implements OnInit {
    employee: Employee = {
        name: 'Felipe',
        salary: 0,
        bonus: 0
    };

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {
    }

    addEmployee() {
        const copy = Object.assign({}, this.employee);
        this.employeeService.addEmployee(copy);
    }

}
