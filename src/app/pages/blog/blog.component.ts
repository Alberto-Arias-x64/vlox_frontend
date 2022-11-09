import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/card';
import { ResponsePost } from 'src/app/models/response';
import { StoreService } from 'src/app/services/store.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})


export class BlogComponent implements OnInit {

    data: Post[] = []
    charge: boolean = false

    constructor(private store: StoreService) { }

    ngOnInit(): void {
        this.store.getPost().subscribe({
            next: ({ response }) => {
                response.forEach( (element:ResponsePost) => {
                    this.charge = true
                    const newItem:Post = {
                        icon: `http://localhost:3000/storage/${element.image}`,
                        title: element.title,
                        description: element.data,
                        button: 'Leer Mas...',
                        id: element.id,
                        likes: parseInt(element.likes)
                    }
                    this.data.push(newItem)
                })
            },
        })
    }

}
