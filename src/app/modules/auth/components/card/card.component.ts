import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../../models/card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() data:Data = new Data()

    constructor(private router: Router) { }

    ngOnInit(): void {
    } 

    onClick(dir:string){
        this.router.navigate([`admin/dashboard/${dir}`])
    }
}
