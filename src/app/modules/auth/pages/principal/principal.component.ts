import { Component, OnInit } from '@angular/core';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Data } from '../../models/card';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

    data: Data[] = [
        {
            title: 'Añadir Post',
            icon: 'assets/images/add.png',
            url: 'add',
            button: 'Vamos',
            color: '#B9EDED'
        },
        {
            title: 'Modificar Post',
            icon: 'assets/images/edit.png',
            url: 'edit',
            button: 'Vamos',
            color: '#AEC5EB'
        },
        {
            title: 'Remover Post',
            icon: 'assets/images/sup.png',
            url: 'delete',
            button: 'Vamos',
            color: '#EDAFB8'
        },
    ]

    lastPost: String = ''
    totalLikes: number = 0

    constructor() { }

    ngOnInit(): void {
        ajax.get('/api/analytics').subscribe(({ response }:AjaxResponse<any>) => {
            this.lastPost = response.lastPost
            this.totalLikes = response.totalLikes
        })
    }

    logout(){
        window.sessionStorage.clear()
        window.location.reload()
    }

}
