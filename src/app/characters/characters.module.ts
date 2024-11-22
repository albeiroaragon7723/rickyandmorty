import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layouts/layout/layout.component';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { CharactersRoutingModule } from './characters-routing.module';



@NgModule({
  declarations: [
    LayoutComponent,
    CharactersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CharactersRoutingModule,
  ]
})
export class CharactersModule { }
