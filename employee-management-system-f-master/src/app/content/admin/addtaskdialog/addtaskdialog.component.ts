import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {TaskService} from '../../../services/task.service';
import {Task} from '../../../datamodels/task';

@Component({
  selector: 'app-addtaskdialog',
  templateUrl: './addtaskdialog.component.html',
  styleUrls: ['./addtaskdialog.component.scss']
})
export class AddtaskdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddtaskdialogComponent>,
              private taskService: TaskService) {
  }

  task: Task;
  taskStartDate: Date;
  taskEndDate: Date;

  ngOnInit(): void {
    this.taskStartDate = new Date();
    this.taskEndDate = new Date();
    console.log('startdate: ' + this.taskStartDate);

    this.task = new Task();
    this.task.id = 0;
    this.task.description = '';
    this.task.status = 'NEW';
    this.task.startDate = '';
    this.task.endDate = '';

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmAdd(): void {
    this.task.startDate = this.taskStartDate.toLocaleDateString();
    this.task.endDate = this.taskEndDate.toLocaleDateString();
    this.taskService.addTask(this.task);
    this.dialogRef.close();

  }

  submit(): void {

  }
}
