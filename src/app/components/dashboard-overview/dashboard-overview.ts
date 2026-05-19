import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-overview',
  imports: [],
  templateUrl: './dashboard-overview.html',
  styleUrl: './dashboard-overview.scss',
})
export class DashboardOverview {

  public dashboardOverviewData = [
    {
      image:"images/employees.png",
      title:"Total Employees",
      value:"10"
    },
    {
      image:"images/department.png",
      title:"Total Departments",
      value:"10"
    },
    {
      image:"images/payment-method.png",
      title:"Avg pay sallary",
      value:"10 LPA"
    },
    {
      image:"images/attendance.png",
      title:"Attendance",
      value:"8"
    }
  ]

  public leaveDetails = [
    {
      image:"images/exit.png",
      title:"On leave",
      value:"2"
    },
    {
      image:"images/application.png",
      title:"Leave Applied",
      value:"5"
    },
    {
      image:"images/check.png",
      title:"Leave Approved",
      value:"2"
    },
    {
      image:"images/delete.png",
      title:"Leave Rejected",
      value:"2"
    }
  ]
}
