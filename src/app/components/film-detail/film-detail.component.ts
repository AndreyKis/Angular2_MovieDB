import {Component, OnInit, Sanitizer} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import { Location }               from '@angular/common';
import {FilmService} from "../films/films.service";
import 'rxjs/add/operator/switchMap';
import {Film} from "../../Film";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    moduleId: module.id,
    selector: 'my-film-detail',
    templateUrl: './film-detail.component.html'
})
export class FilmDetailComponent implements OnInit{
    film: Film;

    constructor(
        private filmService: FilmService,
        private route: ActivatedRoute,
        private location: Location,
    ) {}


    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.filmService.getFilmById(+params['id']))
            .subscribe(filmById => {
                this.film = filmById
            });
    }

    goBack(): void {
        this.location.back();
    }
}