import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'authentication',
  loadChildren: () =>
    import('./api-authorization/api-authorization.module').then(
      (m) => m.ApiAuthorizationModule
    )
},
{
  path: '**',
  redirectTo: 'authentication',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
