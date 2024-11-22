import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    title: 'Rick and Morty App | Personajes',
    loadChildren: () => import('./characters/characters.module')
      .then(m => m.CharactersModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
