import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TaskService} from '../../../services/task.service';

@Component({
  selector: 'app-deletetaskdialog',
  templateUrl: './deletetaskdialog.component.html',
  styleUrls: ['./deletetaskdialog.component.scss']
})
export class DeletetaskdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletetaskdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private taskService: TaskService) {
  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {

  }

  confirmDelete(): void {
    this.taskService.deleteTaskById(this.data.id);

    this.dialogRef.close();
  }
}
