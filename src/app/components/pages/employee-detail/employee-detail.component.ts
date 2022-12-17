import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{

  employee = {};

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const employeeId: string = this.route.snapshot.paramMap.get('employeeId');

    this.employeeService.getEmployeeById(employeeId).subscribe((res) => {
      console.log(res);
      this.employee = res;
      console.log(this.employee)
    })

  }

}
