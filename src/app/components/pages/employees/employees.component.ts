import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeResponse } from 'src/interface/EmployeeResponse';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements AfterViewInit{
  displayedColumns: string[] = ['name', 'SSN', 'Work Authorization Title', 'Cell Phone', 'Email'];

  employees = {};

  @ViewChild(MatPaginator) paginator : MatPaginator;

 constructor(private employeeSerivce: EmployeeService) {}

  dataSource;

  ngAfterViewInit() {
    this.employeeSerivce.getEmployees().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    })
  }

//  ngOnInit(): void {

  // this.employeeSerivce.getEmployees().subscribe((res) => {
  //   console.log(res);
  //   this.employees = res;
  //   this.dataSource = new MatTableDataSource(this.employees);
  //   });

//   this.employeeSerivce.getEmployees()
//   .subscribe((res) => {
//     console.log(res);
//     this.dataSource = new MatTableDataSource(res);
//   });


  }
