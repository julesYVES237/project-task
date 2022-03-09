# Employee Management System 
Employee Management System is the 3-Tier web application, which was created for simplifying task managing and other daily routines which are everyday life in many companies. 

<br>

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/tasks_list.png">
</p>

<br>

## Tech stack:
### Frontend: 
+ Angular CLI v. 10
+ Angular Material UI Component library (mat-table, mat-buttons, mat-dialog, color theme Indigo-pink).
+ Toastr notifications

### Backend: [link to Backend](https://github.com/rwedzony/EmployeeManagementSystem)
+ Spring Boot
+ Spring Data JPA
+ Spring Security
+ PosgreSQL database
+ API secured by Spring Security and JWT generated token.
+ API docummented by Swagger

## Frontend-Backend communication:
For comunication purposes REST API in JSON format is used. API uses 5 methods of HTTP protocol: GET, POST, PUT, PATCH, and DELETE

## Detailed app description

The app offers two roles of the users: normal user and admin. As app was initially created as intern system, adding new users (who are basically employees at the same time) function is only limited to accounts which have "ADMIN" priviledges. Every user need to log in to grant access to app functionality:

<br>

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/login_page.png">
</p>

<br>

Login with bad credentials is impossible, which is indicated by Toastr non-blocking notification:

<br>

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/login_badcredentials.png">
</p>

<br>

App layout consists of sliding side navigation menu, which enables access to different functionality, from which the most important is edit profile and tasks. Edit profile simply allows to change user credentials (first name, last name, email or password). As app uses JWT token to authorize users, every change in credentials is followed by logout from system action and login request, as token is no loger valid.

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/edit_profile.png">
</p>

### User role app functionality
Task module enables user to see, what tasks are assigned to him by admin and which of them have "NEW" status. After completing task, user can mark it as "DONE":

<br>

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/user_tasks.png">
</p>

<br>

User can also sent email to admin using his email client. There is plan to introduce "Vacation" module, where dayoff planing will take place. Dashboard is introduced to give user quick feedback of the tasks status: how many of them are assigned to particular user and what are their status:

<br>

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/user_dashboard.png">
</p>

<br>

### Admin role app functionality
Admin app functionality is more extended than user. First of all, admin has rights to perform the CRUD operations on employees list (of course CRUD operations of his own profile is not allowed- he has to use edit profile as normal user instead)

<br>

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/employee_list.png">
</p>

<br>

The other admin module is extended task manager:

<br>

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/tasks_list.png">
</p>

<br>

Admin can assign task to employee, edit task, and change task status from "DONE" to "NEW" as well as unassign. As tasks and employees are stored in DB using 1:N relationship, deleting particular empolyee indicates that all of his tasks become automatically unassigned.

There is also dashboard card for admin:

<br>

<p align="center">
  <img src="https://github.com/rwedzony/EmployeeManagementSystem_Front/blob/master/src/assets/img/admin_dashboard.png">
</p>

<br>

which serves admin basic inforamtions of the current company state. This means how many employees are currently in DB, what is the sum of their salary. Also the detailed information about all system tasks is delivered: How many, how many of them are currently assigned / unassigned, how many has "NEW" as well as "DONE" status.

## TODO
1. Add unit tests
2. Add Vacation planning calendar
3. Refactor components
4. Add separate app docs instead of readme
