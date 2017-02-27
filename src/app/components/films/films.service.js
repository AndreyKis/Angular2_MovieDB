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
 * Created by ankys on 25.02.2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var FilmService = (function () {
    function FilmService(http) {
        this.http = http;
        this.movieDbUrl = 'https://api.themoviedb.org/3';
        this.requestConfigs = '?api_key=78bbd31fd2559cc0427d00ba25c38667&language=en-US';
    }
    FilmService.prototype.getPopularFilms = function (page) {
        var url = this.movieDbUrl + "/movie/popular" + this.requestConfigs + "&page=" + page;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    FilmService.prototype.getTopRatedFilms = function (page) {
        var url = this.movieDbUrl + "/movie/top_rated" + this.requestConfigs + "&page=" + page;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    FilmService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    FilmService.prototype.getFilmById = function (id) {
        return this.http
            .get(this.movieDbUrl + "/movie/" + id + this.requestConfigs)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FilmService.prototype.getFilmByName = function (name) {
        return this.http
            .get("")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FilmService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FilmService);
    return FilmService;
}());
exports.FilmService = FilmService;
//# sourceMappingURL=films.service.js.map