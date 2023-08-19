import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpeningPageComponent } from './opening-page/opening-page.component';
import { OwnRecipiesComponent } from './own-recipies/own-recipies.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [

  { path: '', component: OpeningPageComponent },

  { path: 'own', component: OwnRecipiesComponent },
  { path: 'comments', component: CommentsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
