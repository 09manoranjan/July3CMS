import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'listUser',component:ListUserComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'updateUser/:id',component:UpdateUserComponent},
  {path:'updateUser',component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
