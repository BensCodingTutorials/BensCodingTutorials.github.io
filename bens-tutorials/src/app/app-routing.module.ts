import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ArticleComponent } from './pages/article/article.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,
  children:[
    {
      path:'', 
      component:HomeComponent
    },

    {
      path:':topic', 
      component:HomeComponent
    },

    {
      path:':topic/:series', 
      component:HomeComponent
    },
  ]},

  {
    path:'home/:topic/:series/:article', 
    component:ArticleComponent
  },


  {path: 'about', component: AboutMeComponent},
  // {path: 'article', component: ArticleComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }