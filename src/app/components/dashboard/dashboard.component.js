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
var films_service_1 = require("../films/films.service");
var DashBoardComponent = (function () {
    function DashBoardComponent(filmService) {
        this.filmService = filmService;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmService.getPopularFilms(1).then(function (mockedFilms) { return _this.films = mockedFilms.slice(1, 5); });
    };
    DashBoardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [films_service_1.FilmService])
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashboard.component.js.map