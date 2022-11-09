import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { EditComponent } from './pages/edit/edit.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'add', component: AddComponent },
    { path: 'delete', component: DeleteComponent },
    { path: 'edit', component: EditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
