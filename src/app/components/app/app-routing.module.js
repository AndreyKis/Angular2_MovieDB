"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var film_detail_component_1 = require("../film-detail/film-detail.component");
var popular_films_component_1 = require("../films/popular-films.component");
var core_1 = require("@angular/core");
var top_rated_films_component_1 = require("../films/top-rated-films.component");
var favourite_films_component_1 = require("../films/favourite-films.component");
var search_film_component_1 = require("../films/search-film.component");
/**
 * Created by ankys on 25.02.2017.
 */
var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashBoardComponent },
    { path: 'detail/:id', component: film_detail_component_1.FilmDetailComponent },
    { path: 'films/popular', component: popular_films_component_1.PopularFilmsComponent },
    { path: 'films/top_rated', component: top_rated_films_component_1.TopRatedFilmsComponent },
    { path: 'films/add_to_favourite/:id', component: favourite_films_component_1.FavouriteFilmsComponent },
    { path: 'films/search/:id', component: search_film_component_1.SearchFilmComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map