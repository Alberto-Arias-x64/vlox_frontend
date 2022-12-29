import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { ApiQuery } from '../../models/apiQuery'

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

    id: string = ''
    editMode: boolean = false
    sending: boolean = false
    @ViewChild('postForm', { static: false }) form!: FormGroup

    constructor() { }

    ngOnInit(): void {
    }

    edit(id: string) {
        ajax.get(`/api/post/${id}`).subscribe(({ response }: AjaxResponse<any>) => {
            this.editMode = true
            setTimeout(() => {
                this.form.setValue({
                    'title': response.title,
                    'contend': response.data,
                    'image': response.image
                })
            }, 100);
        })
    }

    onSubmit(values: ApiQuery) {
        this.sending = true
        ajax.put('/api/post', {
            id: values.id,
            title: values.title,
            data: values.contend,
            image: values.image
        }).subscribe(() => this.sending = false)
        this.editMode = false
    }
}
