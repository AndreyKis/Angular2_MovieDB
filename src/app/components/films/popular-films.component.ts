import {Component, OnInit} from "@angular/core";
import {Film} from "../../Film";
import {FilmService} from "./films.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-films',
    providers: [FilmService],
    templateUrl: 'films.component.html',
    styleUrls: ['films.component.css']
})
export class PopularFilmsComponent implements OnInit {
    title: string;
    page: number;
    films: Film[];

    constructor(private filmService: FilmService, private router: Router) {
        this.title = "Popular films";
        this.page = 1;
    }


    ngOnInit(): void {
        this.filmService.getPopularFilms(this.page).then(mockedFilms => this.films = mockedFilms)
    }

    nextPage(): void {
        this.page++;
        this.filmService.getPopularFilms(this.page).then(nextPageFilms => this.films = this.films.concat(nextPageFilms));
    }
}
