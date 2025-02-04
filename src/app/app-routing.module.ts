import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'cal-bmi',
    loadChildren: () =>
      import('./cal-bmi/cal-bmi.module').then((m) => m.CalBmiPageModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./menu/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'menu-detail',
    loadChildren: () =>
      import('./menu-detail/menu-detail.module').then(
        (m) => m.MenuDetailPageModule
      ),
  },
  {
    path: 'ingredient',
    loadChildren: () =>
      import('./ingredient/ingredient.module').then(
        (m) => m.IngredientPageModule
      ),
  },
  {
    path: 'video',
    loadChildren: () =>
      import('./video/video.module').then((m) => m.VideoPageModule),
  },
  {
    path: 'calories',
    loadChildren: () =>
      import('./calories/calories.module').then((m) => m.CaloriesPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
