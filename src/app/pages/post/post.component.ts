import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import { Post } from 'src/app/models/card';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    data: Post = new Post()
    charge: boolean = false
    liked: boolean = false

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.getPost(this.route.snapshot.params['id'])
    }

    getPost(id: string): void {
        ajax.get(`/api/post/${id}`).subscribe({
            next: ({ response }: any) => {
                this.data.description = response.data
                this.data.id = response.id
                this.data.likes = response.likes
                this.data.title = response.title
                this.data.icon = `/storage/${response.image}`
                const like = window.localStorage.getItem(this.data.id)
                if (like) this.liked = true
            },
            error: () => this.router.navigate(['404']),
        })
    }

    addLike(): void {
        if (this.liked) return
        ajax.post('/api/analytics/add', { id: this.data.id }).subscribe(() => {
            localStorage.setItem(this.data.id, 'true')
            this.liked = true
            this.data.likes!++
        })
    }
}
