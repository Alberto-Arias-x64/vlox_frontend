import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

    sending: Boolean = false

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(element: any) {
        this.sending = true
        const image: any = document.getElementById("file-id")
        const bodyContent = new FormData()
        bodyContent.append('storage', image.files[0])
        ajax.post('/api/image', bodyContent).subscribe({
            next: ({ response }: any) => {
                ajax.post('/api/post', {
                    title: element.title,
                    data: element.contend,
                    image: response.file
                }).subscribe({
                    next: () => {
                        this.sending = false
                        Swal.fire({
                            title: 'Creado',
                            icon: 'success',
                            confirmButtonText: 'Genial'
                        }).then(() => {
                            this.router.navigate(['admin/dashboard'])
                        })
                    },
                    error: () => {
                        this.sending = false
                        Swal.fire({
                            title: 'Error',
                            icon: 'error',
                            confirmButtonText: 'F'
                        })
                    }
                })
            },
            error: () => {
                this.sending = false
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    confirmButtonText: 'F'
                })
            }
        })
    }

}
