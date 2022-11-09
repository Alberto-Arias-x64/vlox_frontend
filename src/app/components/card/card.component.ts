import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/models/card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() data:Data = new Data()

    constructor() { }

    ngOnInit(): void {
    }

}
