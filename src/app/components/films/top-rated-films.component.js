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
 * Created by ankys on 26.02.2017.
 */
var core_1 = require("@angular/core");
var films_service_1 = require("./films.service");
var router_1 = require("@angular/router");
var TopRatedFilmsComponent = (function () {
    function TopRatedFilmsComponent(filmService, router) {
        this.filmService = filmService;
        this.router = router;
        this.page = 1;
    }
    TopRatedFilmsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmService.getTopRatedFilms(this.page).then(function (mockedFilms) { return _this.films = mockedFilms; });
    };
    TopRatedFilmsComponent.prototype.nextPage = function () {
        var _this = this;
        this.page++;
        this.filmService.getTopRatedFilms(this.page).then(function (nextPageFilms) { return _this.films = _this.films.concat(nextPageFilms); });
    };
    TopRatedFilmsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-top-rated-films',
            providers: [films_service_1.FilmService],
            templateUrl: 'films.component.html',
            styleUrls: ['films.component.css']
        }), 
        __metadata('design:paramtypes', [films_service_1.FilmService, router_1.Router])
    ], TopRatedFilmsComponent);
    return TopRatedFilmsComponent;
}());
exports.TopRatedFilmsComponent = TopRatedFilmsComponent;
//# sourceMappingURL=top-rated-films.component.js.map