import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {PopularFilmsComponent} from "../films/popular-films.component";
import {FilmDetailComponent} from "../film-detail/film-detail.component";
import {FilmService} from "../films/films.service";
import {AppComponent} from "./app.component";
import {DashBoardComponent} from "../dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {TopRatedFilmsComponent} from "../films/top-rated-films.component";
import {FavouriteFilmsComponent} from "../films/favourite-films.component";
import {SearchFilmComponent} from "../films/search-film.component";
import {CoolStorageModule} from "angular2-cool-storage";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        CoolStorageModule.forRoot()
    ],
    providers: [
        FilmService
    ],
    declarations: [
        AppComponent,
        DashBoardComponent,
        PopularFilmsComponent,
        TopRatedFilmsComponent,
        FilmDetailComponent,
        FavouriteFilmsComponent,
        SearchFilmComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
