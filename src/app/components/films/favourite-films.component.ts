/**
 * Created by ankys on 27.02.2017.
 */
import {Component, OnInit} from "@angular/core";
import {Film} from "../../Film";
import {Params, ActivatedRoute} from "@angular/router";
import {CoolLocalStorage} from "angular2-cool-storage";
import {FilmService} from "./films.service";

@Component({
    moduleId: module.id,
    selector: 'my-films',
    templateUrl: 'films.component.html',
    styleUrls: ['films.component.css']
})
export class FavouriteFilmsComponent implements OnInit {
    films: Film[];

    constructor(private localStorage: CoolLocalStorage,
                private filmService: FilmService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let array = JSON.parse(this.localStorage.getItem("favouriteFilms"));

        this.route.params
            .switchMap((params: Params) => this.filmService.getFilmById(+params['id']))
            .subscribe(filmByName => {
                if (!array) {
                    array = [];
                }

                array.push(filmByName);
                this.localStorage.setItem("favouriteFilms", JSON.stringify(array));
            });
    }
}