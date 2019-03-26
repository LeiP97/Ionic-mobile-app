import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'recorder-name', loadChildren: './recorder-name/recorder-name.module#RecorderNamePageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'teachermenu', loadChildren: './teachermenu/teachermenu.module#TeachermenuPageModule' },
  { path: 'observemenu', loadChildren: './observemenu/observemenu.module#ObservemenuPageModule' },
  { path: 'sessioninfo', loadChildren: './sessioninfo/sessioninfo.module#SessioninfoPageModule' },
  { path: 'information', loadChildren: './information/information.module#InformationPageModule' },
  { path: 'teachermenu/:activitytitle', loadChildren: './teacher-detail/teacher-detail.module#TeacherDetailPageModule' },
  { path: 'observemenu/:studentid', loadChildren: './observe-detail/observe-detail.module#ObserveDetailPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
