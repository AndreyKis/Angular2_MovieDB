import {Component} from "@angular/core";
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

    constructor() {
        this.title = 'My films';
    }
}
