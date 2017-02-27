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
/**
 * Created by ankys on 27.02.2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular2_cool_storage_1 = require("angular2-cool-storage");
var films_service_1 = require("./films.service");
var FavouriteFilmsComponent = (function () {
    function FavouriteFilmsComponent(localStorage, filmService, route) {
        this.localStorage = localStorage;
        this.filmService = filmService;
        this.route = route;
    }
    FavouriteFilmsComponent.prototype.ngOnInit = function () {
        this.films = JSON.parse(this.localStorage.getItem("favouriteFilms"));
    };
    FavouriteFilmsComponent.prototype.removeFromFavourites = function (index) {
        this.films.splice(index, 1);
        this.localStorage.setItem("favouriteFilms", JSON.stringify(this.films));
    };
    FavouriteFilmsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-films',
            templateUrl: 'favourite-films.component.html',
            styleUrls: ['films.component.css']
        }), 
        __metadata('design:paramtypes', [angular2_cool_storage_1.CoolLocalStorage, films_service_1.FilmService, router_1.ActivatedRoute])
    ], FavouriteFilmsComponent);
    return FavouriteFilmsComponent;
}());
exports.FavouriteFilmsComponent = FavouriteFilmsComponent;
//# sourceMappingURL=favourite-films.component.js.map