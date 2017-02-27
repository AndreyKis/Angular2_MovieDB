import {Component, OnInit} from "@angular/core";
import {Film} from "../../Film";
import {FilmService} from "./films.service";
import {Router} from "@angular/router";
import {CoolLocalStorage} from "angular2-cool-storage";

@Component({
    moduleId: module.id,
    selector: 'my-films',
    providers: [FilmService],
    templateUrl: 'films.component.html',
    styleUrls: ['films.component.css']
})
export class PopularFilmsComponent implements OnInit {
    title: string;
    private popularFilmsPage: number;
    private topRatedFilmsPage: number;
    films: Film[];

    constructor(private localStorage: CoolLocalStorage,
                private filmService: FilmService,
                private router: Router) {
        this.title = "Popular films";
        this.popularFilmsPage = 1;
        this.topRatedFilmsPage = 1;
    }


    ngOnInit(): void {
        this.nextPage();
    }

    nextPage(): void {
        if(this.router.url === "/films/popular")
            this.filmService.getPopularFilms(this.popularFilmsPage).then(mockedFilms => {
                this.films = this.combineFilmsWithArr(mockedFilms);
                this.popularFilmsPage++;
            });

        else if(this.router.url === "/films/top_rated")
            this.filmService.getTopRatedFilms(this.topRatedFilmsPage).then(mockedFilms => {
                this.films = this.combineFilmsWithArr(mockedFilms);
                this.topRatedFilmsPage++
            });
    }

    addToFavourite(id: number): void {
        let array = JSON.parse(this.localStorage.getItem("favouriteFilms"));

        this.filmService
            .getFilmById(id)
            .then(filmByName => {
                if (!array) {
                    array = [];
                }

                if (this.arrayContainsFilm(array, filmByName) == false) {
                    array.push(filmByName);
                    this.localStorage.setItem("favouriteFilms", JSON.stringify(array));
                }
            });
    }

    private arrayContainsFilm = function (array: Film[], film: Film): boolean {
        var res = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == film.id) {
                res = true;
                break;
            }
        }
        return res;
    };

    private combineFilmsWithArr(arr2: Film[]): Film[] {
        if(!this.films)
            this.films = [];
        return this.films.concat(arr2)
    }
}
