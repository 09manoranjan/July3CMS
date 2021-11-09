import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../../services/user-info.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private UserService:UserInfoService) { }
  userDataList:any = [];
  ngOnInit() {
    this.getUserlist()
  }
  getUserlist(){
    this.UserService.getUserList('').subscribe((result)=>{
      console.log("result-------------->",result);
      this.userDataList = result;
    })
  }
  deleteUser(userId){
    console.log("user Id--------------->",userId);
    Swal.fire({
      title:'Are you sure you want to delete?',
      text: 'You will not be able to recover this data once deleted !',
      icon:'warning',
      showCancelButton:true,
      cancelButtonText : 'No',
      confirmButtonText:'Yes'
    }).then((result)=>{
      if(result.isConfirmed){
        this.UserService.DeleteUser(userId).subscribe((result)=>{
          console.log("result-------------->",result);
          Swal.fire('Success','Data Deleted Successfully !',"success")
          this.getUserlist()
        })
      }
    })
  }
  updateUser(userId){
    
  }


}
