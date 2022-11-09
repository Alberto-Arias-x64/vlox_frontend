import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private store: StoreService, private router: Router) { }

    ngOnInit(): void {
    }

    send(form: NgForm) {
        this.store.verifyUser(form.value.user, form.value.password).subscribe({
            next: ({ response }) => {
                if (response.token === true) {
                    this.store.token = response.token
                    window.sessionStorage.setItem('token','true')
                    this.router.navigate(['/admin/dashboard'])
                }
            },
            error: () => {
                Swal.fire({
                    title: 'Error',
                    text: `Datos invalidos`,
                    icon: 'error',
                    confirmButtonText: 'F'
                })
            },
        })
        form.resetForm()
    }
}