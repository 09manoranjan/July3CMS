import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { UserInfoService } from '../../services/user-info.service';
import Swal from 'sweetalert2';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  constructor(private userService:UserInfoService,private router:ActivatedRoute,private route:Router) { }
  updateUserForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    phone : new FormControl(''),
    emailID : new FormControl(''),
    city: new FormControl('')
  })
  ngOnInit() {
    this.userService.getUserList(this.router.snapshot.params.id).subscribe((result)=>{
      console.log("result from udpate component------------->",result);
      this.updateUserForm = new FormGroup({
        firstName : new FormControl(result['firstName']),
        lastName : new FormControl(result['lastName']),
        phone : new FormControl(result['phone']),
        emailID : new FormControl(result['emailID']),
        city: new FormControl(result['city'])
      })
    })
  }
  updateUser(){
    let formVal = this.updateUserForm.value;
    console.log("form val--------->",formVal);
    this.userService.updateUserList(formVal,this.router.snapshot.params.id).subscribe((result)=>{
      console.log("result after adding new User------------->",result);
      Swal.fire('Success','Contact updated Successfully !','success');
      this.route.navigate(['/listUser']);
    })
  }

}

