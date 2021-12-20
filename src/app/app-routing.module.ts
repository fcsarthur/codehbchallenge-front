import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component';
import { DocsComponent } from './pages/docs/docs.component';

const routes: Routes = [
  {path: '', redirectTo: '/busca', pathMatch: 'full'},
  {path: 'busca', component: HomeComponent},
  {path: 'docs', component: DocsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
