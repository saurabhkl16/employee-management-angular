import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class EmployeesComponent {
  public displayedColumns: string[] = ['position', 'name', 'department', 'actions'];
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  surname: string;
  position: number;
  department: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Saurabh',
    surname: 'Lomte',
    department: 'Developer',
  },
  {
    position: 2,
    name: 'Rahul',
    surname: 'Sharma',
    department: 'HR',
  },
  {
    position: 3,
    name: 'Amit',
    surname: 'Patil',
    department: 'Tester',
  },
  {
    position: 4,
    name: 'Priya',
    surname: 'Joshi',
    department: 'Manager',
  },
  {
    position: 5,
    name: 'Rohit',
    surname: 'Verma',
    department: 'Support',
  },
  {
    position: 6,
    name: 'Neha',
    surname: 'Singh',
    department: 'Developer',
  },
  {
    position: 7,
    name: 'Arjun',
    surname: 'Kumar',
    department: 'HR',
  },
  {
    position: 8,
    name: 'Shreya',
    surname: 'Gupta',
    department: 'Tester',
  },
  {
    position: 9,
    name: 'Vikram',
    surname: 'Nair',
    department: 'Manager',
  },
  {
    position: 10,
    name: 'Anjali',
    surname: 'Desai',
    department: 'Support',
  },
  {
    position: 11,
    name: 'Rohan',
    surname: 'Pandey',
    department: 'Developer',
  },
  {
    position: 12,
    name: 'Divya',
    surname: 'Reddy',
    department: 'HR',
  },
  {
    position: 13,
    name: 'Arun',
    surname: 'Choudhary',
    department: 'Tester',
  },
  {
    position: 14,
    name: 'Pooja',
    surname: 'Mishra',
    department: 'Manager',
  },
  {
    position: 15,
    name: 'Karan',
    surname: 'Yadav',
    department: 'Support',
  },
];
