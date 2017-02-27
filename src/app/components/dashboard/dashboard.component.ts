/**
 * Created by ankys on 25.02.2017.
 */
import {Component, OnInit} from "@angular/core";
import {Film} from "../../Film";
import {FilmService} from "../films/films.service";
@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashBoardComponent implements OnInit{
    films: Film[];

    constructor(private filmService: FilmService) {}


    ngOnInit(): void {
        this.filmService.getPopularFilms(1).then(mockedFilms => this.films = mockedFilms.slice(1, 5));
    }
}
