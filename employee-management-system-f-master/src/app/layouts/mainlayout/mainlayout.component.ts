import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.scss']
})
export class MainlayoutComponent implements OnInit {

  sideBarOpen = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  sideBarToggler($event: any): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
