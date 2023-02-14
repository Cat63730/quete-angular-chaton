import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { AppComponent } from './app.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'list-kitten',
    component: ListKittenComponent,
  },
  {
    path: 'create-kitten',
    component: CreateKittenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 
