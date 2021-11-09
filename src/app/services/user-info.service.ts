import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http:HttpClient) { }
  link = "http://localhost:3000/userInfo/";
  getUserList(userId){
    if(userId == "" || userId == undefined){
      return this.http.get(this.link);
    }
    else{
      return this.http.get(this.link+userId); 
    }
  }
  updateUserList(userData,userId){
    return this.http.put(this.link+userId,userData);
  }
  DeleteUser(UserId){
    return this.http.delete(this.link+UserId);
  }
  addNewUser(UserData){
    return this.http.post(this.link,UserData);
  }
}
