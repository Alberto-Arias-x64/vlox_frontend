import { Component, OnInit } from '@angular/core';
import { StoreService } from './services/store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'vlox';
    token: boolean = JSON.parse(window.sessionStorage.getItem('token')!)

    constructor(private store:StoreService){}

    ngOnInit(): void {
        if(this.token) this.store.token = true
    }
}
