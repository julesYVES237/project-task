import {Component, EventEmitter, OnInit, Output,AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output() tSidebar: EventEmitter<any>=new EventEmitter();
  constructor(private router: Router,
              private authService: AuthService) { }


  ngOnInit(): void {
  }

  toggleSideBar() {
    this.tSidebar.emit();
  }

  signOut() {
    this.authService.logout();
   this.router.navigateByUrl('');
  }
 
}
