import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { UnknowUrlComponent } from '../../shared-template/unknow-url/unknow-url.component';

const routes: Routes = [
  {
    path: 'user',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'edit/:name',
        component: EditComponent
      },
      {
        path: 'profile/:name',
        component: DetailComponent
      },
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: '**',
        component: UnknowUrlComponent
      },
      {
        path: 'list',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
