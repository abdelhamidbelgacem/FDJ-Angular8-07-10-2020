import { Routes, RouterModule } from '@angular/router';

import { FdjComponent } from './fdj';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: FdjComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);