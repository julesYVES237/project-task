import { Component, OnInit } from '@angular/core';
 import {AuthService} from "../../services/auth.service";
import { Router, ActivatedRoute } from '@angular/router';
import {LoginRequestPayload} from "../../datamodels/login-request.payload";
import {ToastrService} from "ngx-toastr";
import {TaskService} from '../../services/task.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  loginPayload: LoginRequestPayload;


  constructor(private router: Router,
              private authService: AuthService,
              private taskService: TaskService,
              private toastrService: ToastrService) {
    this.loginPayload = {username:'', password: ''};

  }
  hide=true;

  ngOnInit(): void {
  }
  submit(){

  }
  signIn() {
    this.authService.login(this.loginPayload).subscribe( data => {
        this.toastrService.success("You are Logged in!","Success",{
          timeOut:2000,
        });

      let urlToNavigate:string;
      if(this.authService.isAdmin()){
        urlToNavigate='ems/dashboardadmin';
      }
      else {
        urlToNavigate='ems/dashboarduser';
      }
        this.router.navigateByUrl(urlToNavigate);
    },
      error => {
        this.toastrService.error("Bad Credentials!","ERROR",{
          timeOut:2000,
          positionClass: 'toast-top-center',
        });
      });

}
completeTask(id: number): void {
const resp2 = this.taskService.getAllNewTasksCount();
if( resp2 != null){
  this.toastrService.success('we have new tasks', 'Success', {
    timeOut: 2000,
  });
}
}

}
