import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

    @ViewChild('header') headerRef!: ElementRef

    constructor(private router: Router) { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        fromEvent(window, 'scroll').subscribe(() => {
            this.sayPixels(this.headerRef.nativeElement)
        })
    }

    sayPixels(element: any) {
        if (window.scrollY === 0) element.style.backgroundColor = 'transparent'
        else element.style.backgroundColor = '#fff'
    }

    showModal() {
        const element: any = document.querySelector('#header_modal')
        element.style.left = 0
    }

    hideModal() {
        const element: any = document.querySelector('#header_modal')
        element.style.left = '-300px'
    }

    changeView(element: string) {
        this.router.navigate([element])
    }
}
