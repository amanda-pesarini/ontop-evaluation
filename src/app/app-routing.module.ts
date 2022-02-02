import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './views/contracts/contracts.component';

const routes: Routes = [
  { path: '', redirectTo: '/contracts', pathMatch: 'full' },
  {
    path: 'contracts', 
    component: ContractsComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }