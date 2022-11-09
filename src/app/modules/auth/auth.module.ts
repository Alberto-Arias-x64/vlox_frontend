import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AddComponent } from './pages/add/add.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { TimeagoPipe } from './pipes/timeago.pipe';
import { EditComponent } from './pages/edit/edit.component';


@NgModule({
  declarations: [
    AuthComponent,
    AddComponent,
    PrincipalComponent,
    CardComponent,
    ListComponent,
    DeleteComponent,
    TimeagoPipe,
    EditComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
