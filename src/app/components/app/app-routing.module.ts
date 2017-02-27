import {Routes, RouterModule} from "@angular/router";
import {DashBoardComponent} from "../dashboard/dashboard.component";
import {FilmDetailComponent} from "../film-detail/film-detail.component";
import {PopularFilmsComponent} from "../films/popular-films.component";
import {NgModule} from "@angular/core";
import {TopRatedFilmsComponent} from "../films/top-rated-films.component";
import {FavouriteFilmsComponent} from "../films/favourite-films.component";
import {SearchFilmComponent} from "../films/search-film.component";
/**
 * Created by ankys on 25.02.2017.
 */
const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard',  component: DashBoardComponent },
    { path: 'detail/:id', component: FilmDetailComponent },
    { path: 'films/popular', component: PopularFilmsComponent },
    { path: 'films/top_rated', component: TopRatedFilmsComponent},
    { path: 'films/add_to_favourite/:id', component: FavouriteFilmsComponent},
    { path: 'films/search/:id', component: SearchFilmComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
