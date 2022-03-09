import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Employeeuser} from '../../../datamodels/employeeuser';
import {EmployeeService} from '../../../services/employee.service';
import {Router} from '@angular/router';
import {EdittaskdialogComponent} from '../../admin/edittaskdialog/edittaskdialog.component';
import {EditprofiledialogComponent} from '../editprofiledialog/editprofiledialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})

export class EditprofileComponent implements OnInit {

  hide = true;
  employeeUser: Employeeuser;

  constructor(private authService: AuthService,
              private employeeService: EmployeeService,
              private router: Router,
              public dialog: MatDialog,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.employeeUser = new Employeeuser();
    this.employeeUser.id = this.authService.getUserId();
    this.employeeUser.firstName = this.authService.getUserFirstName();
    this.employeeUser.lastName = this.authService.getUserLastName();
    this.employeeUser.email = this.authService.getUserLogin();
    this.employeeUser.password = '';
  }

  submitChanges(): void {
    const dialogRef = this.dialog.open(EditprofiledialogComponent, {data: {employee: this.employeeUser}});
    dialogRef.afterClosed().subscribe(result => {
        this.toastrService.success('You edited data and can log in again!', 'Success', {
          timeOut: 2000,
        });
        this.authService.logout();
        this.router.navigateByUrl('');
      },
      (error) => {
        this.toastrService.error('There was some connection error', 'Error', {
          timeOut: 2000,
        });
      },
    );
  }
}
