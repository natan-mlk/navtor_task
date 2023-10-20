import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmissionsComponent } from './emissions/components/emissions/emissions.component';
import { VesselsComponent } from './vessels/components/vessels/vessels.component';

const routes: Routes = [
  {path: '', component: VesselsComponent},
  {path: 'vessels', component: VesselsComponent},
  {path: 'emissions', component: EmissionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
