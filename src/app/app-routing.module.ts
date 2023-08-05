import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { OpeningPageComponent } from './opening-page/opening-page.component';
import { OwnRecipiesComponent } from './own-recipies/own-recipies.component';


const routes: Routes = [

  { path: '', component: OpeningPageComponent },
  { path: 'edit', component: EditComponent },
  { path: 'own', component: OwnRecipiesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
