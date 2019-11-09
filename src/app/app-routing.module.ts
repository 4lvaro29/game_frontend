import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RoundComponent } from './components/round/round.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'app-round', component: RoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
