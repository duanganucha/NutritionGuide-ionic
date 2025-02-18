import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
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
    path: 'ingredient/:type',
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
    path: 'video/:type',
    loadChildren: () =>
      import('./video/video.module').then((m) => m.VideoPageModule),
  },
  {
    path: 'calories',
    loadChildren: () =>
      import('./calories/calories.module').then((m) => m.CaloriesPageModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'main-menu',
    loadChildren: () =>
      import('./main-menu/main-menu.module').then((m) => m.MainMenuPageModule),
  },
  {
    path: 'video-list',
    loadChildren: () =>
      import('./video-list/video-list.module').then(
        (m) => m.VideoListPageModule
      ),
  },
  {
    path: 'sodium-menu',
    loadChildren: () =>
      import('./sodium-menu/sodium-menu.module').then(
        (m) => m.SodiumMenuPageModule
      ),
  },  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
