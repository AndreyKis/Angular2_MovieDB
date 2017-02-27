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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var popular_films_component_1 = require("../films/popular-films.component");
var film_detail_component_1 = require("../film-detail/film-detail.component");
var films_service_1 = require("../films/films.service");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var top_rated_films_component_1 = require("../films/top-rated-films.component");
var favourite_films_component_1 = require("../films/favourite-films.component");
var search_film_component_1 = require("../films/search-film.component");
var angular2_cool_storage_1 = require("angular2-cool-storage");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                angular2_cool_storage_1.CoolStorageModule.forRoot()
            ],
            providers: [
                films_service_1.FilmService
            ],
            declarations: [
                app_component_1.AppComponent,
                popular_films_component_1.PopularFilmsComponent,
                top_rated_films_component_1.TopRatedFilmsComponent,
                film_detail_component_1.FilmDetailComponent,
                favourite_films_component_1.FavouriteFilmsComponent,
                search_film_component_1.SearchFilmComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map