import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    private dataSharer: Subject<number> = new Subject()
    flag: BehaviorSubject<boolean> = new BehaviorSubject(false)
    token: Boolean = false

    constructor(private http: HttpClient) { }

    verifyUser(user: String, password: String): Observable<any> {
        const response$ = ajax.post('/api/admin', { user, password })
        return response$
    }

    getPost(): Observable<any> {
        const response$ = ajax.get('/api/post')
        return response$
    }

    get getValue() {
        return this.dataSharer.asObservable()
    }

    set setValue(data: number) {
        this.dataSharer.next(data)
    }
}
