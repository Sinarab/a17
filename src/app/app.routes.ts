import { Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: LandingPageComponent },
    { path: 'showcase', component: ShowcaseComponent },
    { path: '**', component: PageNotFoundComponent },
];
