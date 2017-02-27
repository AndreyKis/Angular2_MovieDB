/**
 * Created by ankys on 27.02.2017.
 */
import {Component, OnInit} from "@angular/core";
import {Film} from "../../Film";
import {ActivatedRoute} from "@angular/router";
import {CoolLocalStorage} from "angular2-cool-storage";
import {FilmService} from "./films.service";

@Component({
    moduleId: module.id,
    selector: 'my-films',
    templateUrl: 'favourite-films.component.html',
    styleUrls: ['films.component.css']
})
export class FavouriteFilmsComponent implements OnInit {
    films: Film[];

    constructor(private localStorage: CoolLocalStorage,
                private filmService: FilmService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.films = JSON.parse(this.localStorage.getItem("favouriteFilms"));
    }

    removeFromFavourites(index: number): void {
        this.films.splice(index, 1);
        this.localStorage.setItem("favouriteFilms", JSON.stringify(this.films));
    }
}