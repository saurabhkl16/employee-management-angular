# Employee Management System

A modern Employee Management System built using Angular 21.

## Tech Stack

- Angular CLI : 21.2.11
- Angular : 21.2.13
- Node.js : 24.13.1
- TypeScript
- Angular Material
- SASS

---

# Features

- Employee Dashboard
- Employee CRUD Operations
- Department Management
- Attendance Management
- Leave Management
- Role Based Access
- Search & Filter
- Responsive Design
- API Integration
- Authentication & Authorization

---

# Project Setup

## Clone Repository

## Navigate to Project

## Install Dependencies


## Run Application
- ng serve


## Application will run on:
- http://localhost:4200


---

## Build Project
- ng build


# Project Structure

```text
src/
│
├── app/
│   ├── core/
│   ├── shared/
│   ├── layout/
│   ├── models/
│   ├── services/
│   ├── guards/
│   ├── interceptors/
│   ├── pages/
│   │   ├── dashboard/
│   │   ├── employees/
│   │   ├── attendance/
│   │   ├── leaves/
│   │   └── departments/
│   │
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── app.component.ts
│
├── assets/
├── environments/
└── styles.scss
```

---

# Routing Example

```typescript
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  }
];
```

---

# API Configuration

Update API URL inside:

```text
src/environments/environment.ts
```

Example:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

---

# Angular Material Setup

Install Angular Material:

```bash
ng add @angular/material
```

---

# Recommended VS Code Extensions

- Angular Language Service
- ESLint
- Prettier
- Material Icon Theme

---

# Future Enhancements

- Payroll Management
- Employee Analytics
- Face Recognition Attendance
- Email Notifications
- Dark Mode
- Mobile App Support

---

# Author

Saurabh Lomte
Software Developer | Angular Developer | Java Developer