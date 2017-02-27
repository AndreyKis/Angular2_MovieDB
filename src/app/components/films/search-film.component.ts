import {Component, OnInit} from "@angular/core";
import {Film} from "../../Film";
import {FilmService} from "./films.service";
import {Params, ActivatedRoute} from "@angular/router";

/**
 * Created by ankys on 27.02.2017.
 */
@Component({
    moduleId: module.id,
    selector: 'my-films',
    templateUrl: 'films.component.html',
    styleUrls: ['films.component.css']
})
export class SearchFilmComponent implements OnInit {
    films: Film[];

    constructor(private filmService: FilmService,
                private route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => {
                var name = params['id'];
                return this.filmService.getFilmByName(name);
            })
            .subscribe(filmByName => {
                console.log(filmByName);
            });
    }
}