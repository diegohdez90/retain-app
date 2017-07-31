import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core' 
import { Main, Notes, About } from './containers';
import { AuthService, Auth } from './services';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: Main,
    canActivate: [AuthService],
    children: [
      { path: '', component: Notes },
      { path: 'about', component: About }
    ]
  },
    {
        path: 'auth', component: Auth
    }
  { path: '**', redirectTo: '' }
]);
