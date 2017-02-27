/**
 * Created by ankys on 25.02.2017.
 */
import {Injectable} from "@angular/core";
import {Film} from "../../Film";
import {Http} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class FilmService {
    private movieDbUrl: string;
    private requestConfigs: string;

    constructor(private http: Http) {
        this.movieDbUrl = 'https://api.themoviedb.org/3';
        this.requestConfigs = '?api_key=78bbd31fd2559cc0427d00ba25c38667&language=en-US';
    }

    getPopularFilms(page: number): Promise<Film[]> {
        let url = this.movieDbUrl + "/movie/popular" + this.requestConfigs + "&page=" + page;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().results as Film[])
            .catch(this.handleError);
    }

    getTopRatedFilms(page: number): Promise<Film[]> {
        let url = this.movieDbUrl + "/movie/top_rated" + this.requestConfigs + "&page=" + page;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().results as Film[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getFilmById(id: number): Promise<Film> {
        return this.http
            .get(this.movieDbUrl + "/movie/" + id + this.requestConfigs)
            .toPromise()
            .then(response => response.json() as Film)
            .catch(this.handleError);
    }

    getFilmByName(name: string): Promise<Film> {
        return this.http
            .get("")
            .toPromise()
            .then(response => response.json() as Film)
            .catch(this.handleError);
    }
}
