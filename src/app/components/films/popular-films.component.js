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
var films_service_1 = require("./films.service");
var router_1 = require("@angular/router");
var angular2_cool_storage_1 = require("angular2-cool-storage");
var PopularFilmsComponent = (function () {
    function PopularFilmsComponent(localStorage, filmService, router) {
        this.localStorage = localStorage;
        this.filmService = filmService;
        this.router = router;
        this.arrayContainsFilm = function (array, film) {
            var res = false;
            for (var i = 0; i < array.length; i++) {
                if (array[i].id == film.id) {
                    res = true;
                    break;
                }
            }
            return res;
        };
        this.title = "Popular films";
        this.popularFilmsPage = 1;
        this.topRatedFilmsPage = 1;
    }
    PopularFilmsComponent.prototype.ngOnInit = function () {
        this.nextPage();
    };
    PopularFilmsComponent.prototype.nextPage = function () {
        var _this = this;
        if (this.router.url === "/films/popular")
            this.filmService.getPopularFilms(this.popularFilmsPage).then(function (mockedFilms) {
                _this.films = _this.combineFilmsWithArr(mockedFilms);
                _this.popularFilmsPage++;
            });
        else if (this.router.url === "/films/top_rated")
            this.filmService.getTopRatedFilms(this.topRatedFilmsPage).then(function (mockedFilms) {
                _this.films = _this.combineFilmsWithArr(mockedFilms);
                _this.topRatedFilmsPage++;
            });
    };
    PopularFilmsComponent.prototype.addToFavourite = function (id) {
        var _this = this;
        var array = JSON.parse(this.localStorage.getItem("favouriteFilms"));
        this.filmService
            .getFilmById(id)
            .then(function (filmByName) {
            if (!array) {
                array = [];
            }
            if (_this.arrayContainsFilm(array, filmByName) == false) {
                array.push(filmByName);
                _this.localStorage.setItem("favouriteFilms", JSON.stringify(array));
            }
        });
    };
    PopularFilmsComponent.prototype.combineFilmsWithArr = function (arr2) {
        if (!this.films)
            this.films = [];
        return this.films.concat(arr2);
    };
    PopularFilmsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-films',
            providers: [films_service_1.FilmService],
            templateUrl: 'films.component.html',
            styleUrls: ['films.component.css']
        }), 
        __metadata('design:paramtypes', [angular2_cool_storage_1.CoolLocalStorage, films_service_1.FilmService, router_1.Router])
    ], PopularFilmsComponent);
    return PopularFilmsComponent;
}());
exports.PopularFilmsComponent = PopularFilmsComponent;
//# sourceMappingURL=popular-films.component.js.map