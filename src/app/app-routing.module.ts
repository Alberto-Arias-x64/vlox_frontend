import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ReadyGuard } from './guards/ready.guard';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component'
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostComponent } from './pages/post/post.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'admin', component: LoginComponent , canActivate: [ReadyGuard]},
    { path: 'admin/dashboard', canActivate: [AuthGuard], loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: PostComponent },
    { path: 'services', component: ServicesComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
