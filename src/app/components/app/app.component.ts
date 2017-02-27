import {Component} from "@angular/core";
import {CoolLocalStorage} from "angular2-cool-storage";
/**
 * Created by ankys on 25.02.2017.
 */
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    title: string;

    constructor(private localStorage: CoolLocalStorage) {
        // localStorage.clear();
        this.title = 'My films';
    }
}
