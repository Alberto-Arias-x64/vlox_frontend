import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { slide } from 'src/app/models/slide';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

    @ViewChild('background') backgroundRef!: ElementRef
    @ViewChild('image') imgRef!: ElementRef

    examples: string[] = [
        'assets/images/examples/peep-standing-3.png',
        'assets/images/examples/peep-standing-5.png',
        'assets/images/examples/peep-standing-9.png',
        'assets/images/examples/peep-standing-11.png',
        'assets/images/examples/peep-standing-15.png',
        'assets/images/examples/peep-standing-20.png',
        'assets/images/examples/peep-standing-25.png',
    ]

    slides: slide[] = [
        {
            title: 'Escoje el diseño que mas se adapte a tu negocio',
            contend: 'Con miles de plantillas para personalizar, se ajustan a tu medida',
            color: '#fff',
            image: this.examples
        },
        {
            title: 'Obten tu dominio',
            contend: 'Tener tu .com esmuy importante estos dias',
            color: '#FBEE97',
            image: 'assets/images/web.png',
        },
        {
            title: 'Aumenta tus clientes',
            contend: 'Al estar en internet no dependes de que tus clientes vivan cerca de ti, pueden llegar a ti desde todas partes del Mundo',
            color: '#ADEDD5',
            image: 'assets/images/group.png'
        },
        {
            title: 'Comparte tus logros',
            contend: 'Crea y publica instantaneamente en tu blog y has que tu comunidad cresca',
            color: '#71C5EE',
            image: 'assets/images/peeps.png'
        },
    ]

    colorPalets: Array<string> = [
        '#9696F0',
        '#FBC8D5',
        '#025091',
        '#FF7082',
        '#C0E9FF',
        '#BCC5CE',
        '#939FAE',
        '#FDFCFB',
        '#E3D2C4',
        '#626262',
        '#9BC5C3',
        '#DBD5ED',
        '#F3E7EA'
    ]

    counter: number = 0

    constructor() { }

    ngOnInit(): void {
    }
    ngAfterViewInit(): void {
        setInterval(() => this.changeColor(), 5000)
        setTimeout(() => this.showImage(), 1000)
    }

    changeColor() {
        this.backgroundRef.nativeElement.style.backgroundColor = this.colorPalets[this.counter]
        this.changeCounter()
    }

    changeCounter() {
        this.counter++
        if (this.counter === this.colorPalets.length) this.counter = 0
    }

    showImage() {
        this.imgRef.nativeElement.style.bottom = '-20px'
    }

}
