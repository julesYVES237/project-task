import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TaskService} from '../../../services/task.service';
import {Task} from 'src/app/datamodels/task';

@Component({
  selector: 'app-edittaskdialog',
  templateUrl: './edittaskdialog.component.html',
  styleUrls: ['./edittaskdialog.component.scss']
})


export class EdittaskdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EdittaskdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private taskService: TaskService) {
  }

  task: Task;
  taskStartDate: Date;
  taskEndDate: Date;

  ngOnInit(): void {

    this.taskStartDate = new Date(this.data.startDate);
    this.taskEndDate = new Date(this.data.endDate);

    this.task = new Task();
    this.task.id = this.data.id;
    this.task.description = this.data.description;
    this.task.status = this.data.status;
    this.task.startDate = '';
    this.task.endDate = '';

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmEdit(): void {
    this.task.startDate = this.taskStartDate.toLocaleDateString();
    this.task.endDate = this.taskEndDate.toLocaleDateString();
    this.taskService.updateCompleteTask(this.task);
    this.dialogRef.close();

  }

  submit(): void {

  }
}
