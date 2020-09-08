import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes: Routes = [
  { path: 'addpost', component: AddPostComponent},
  { path: 'contact', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddPostComponent, ContactFormComponent]