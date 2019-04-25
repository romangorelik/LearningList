import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BigOComponent } from './big-o/big-o.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'bigO', component: BigOComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
