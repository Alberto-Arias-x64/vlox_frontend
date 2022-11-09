import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/card';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card-blog',
    templateUrl: './card-blog.component.html',
    styleUrls: ['./card-blog.component.scss']
})
export class CardBlogComponent implements OnInit {

    @Input() data: Post = new Post()

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(element: string): void {
        this.router.navigate([`blog/${element}`])
    }

}
