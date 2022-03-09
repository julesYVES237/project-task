import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminEmail } from '../../models/admin-email';
import { ValidateService } from '../validate/validate.service';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private validateService: ValidateService) {

   }


  ngOnInit(): void {
   this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      phone: ['', Validators.required],
      nomCmd: ['', Validators.required],
      price: ['', Validators.required],
      user: ['', Validators.required],
      text: [''],
    });
  }

  add() {
    let value = this.userForm.value;
    console.log('value: ' + value);
    let data: AdminEmail = {
      phone: value.phone,
      price: value.price,
      user: value.user,
      nomCmd: value.nomCmd,
      text: value.text
    }
    this.validateService.create(data).subscribe(
      (value) => {
        Swal.fire("Good job!", "Votre commande a été prise en compte!", "success");
        Swal.update({
          icon: 'success'
        })
      },
      (error)  => {
        Swal.fire("veuillez reessayer!", "Votre commande n'a  pas été prise en compte!", "error");
        Swal.update({
          icon:"error"
        })
      }
    )
  }
}