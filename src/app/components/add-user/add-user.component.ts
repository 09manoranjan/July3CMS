import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { UserInfoService } from '../../services/user-info.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UserInfoService) { }
  newUserForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    phone : new FormControl(''),
    emailID : new FormControl(''),
    city: new FormControl('')
  })
  ngOnInit() {
  }
  addNewUser(){
    let formVal = this.newUserForm.value;
    console.log("form val--------->",formVal);
    this.userService.addNewUser(formVal).subscribe((result)=>{
      console.log("result after adding new User------------->",result);
      Swal.fire('Success','Contact Added Successfully !','success');
    })
  }

}
