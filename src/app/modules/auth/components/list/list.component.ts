import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() buttonText!: string
    @Input() color!: string
    @Output() signal = new EventEmitter<string>()
    postList: Array<any> = []

    constructor() { }

    ngOnInit(): void {
        ajax.get('/api/post_list').subscribe(({ response }: any) => this.postList = response)
    }

    action(id: string) {
        if (this.buttonText === 'edit') this.out(id)
        if (this.buttonText === 'delete') this.deletePost(id)
    }

    out(id: string) {
        this.signal.emit(id)
    }

    deletePost(id: string) {
        ajax({ method: "DELETE", url: '/api/post', body: { id } }).subscribe({
            next: () => {
                ajax.get('/api/post_list').subscribe(({ response }: any) => this.postList = response)
                Swal.fire({
                    title: 'Post eliminado',
                    icon: 'success',
                    confirmButtonText: 'Genial'
                })
            },
            error: () => {
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    confirmButtonText: 'F'
                })
            }
        })
    }

}
