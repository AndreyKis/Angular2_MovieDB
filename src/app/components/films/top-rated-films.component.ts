/**
 * Created by ankys on 26.02.2017.
 */
import {Component, OnInit} from "@angular/core";
import {FilmService} from "./films.service";
import {Film} from "../../Film";
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'my-top-rated-films',
    providers: [FilmService],
    templateUrl: 'films.component.html',
    styleUrls: ['films.component.css']
})
export class TopRatedFilmsComponent implements OnInit{
    page: number;
    films: Film[];

    constructor(private filmService: FilmService, private router: Router) {
        this.page = 1;
    }


    ngOnInit(): void {
        this.filmService.getTopRatedFilms(this.page).then(mockedFilms => this.films = mockedFilms);
    }

    nextPage(): void {
        this.page++;
        this.filmService.getTopRatedFilms(this.page).then(nextPageFilms => this.films = this.films.concat(nextPageFilms));
    }
}
