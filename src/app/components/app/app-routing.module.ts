import {Routes, RouterModule} from "@angular/router";
import {FilmDetailComponent} from "../film-detail/film-detail.component";
import {PopularFilmsComponent} from "../films/popular-films.component";
import {NgModule} from "@angular/core";
import {FavouriteFilmsComponent} from "../films/favourite-films.component";
import {SearchFilmComponent} from "../films/search-film.component";
/**
 * Created by ankys on 25.02.2017.
 */
const routes: Routes = [
    {path: '', redirectTo: 'films/favourites', pathMatch: 'full'},
    {path: 'detail/:id', component: FilmDetailComponent},
    {path: 'films/popular', component: PopularFilmsComponent},
    {path: 'films/top_rated', component: PopularFilmsComponent},
    {path: 'films/favourites', component: FavouriteFilmsComponent},
    {path: 'films/search/:id', component: SearchFilmComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
