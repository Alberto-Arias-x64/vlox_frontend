import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { slide } from 'src/app/models/slide';
import { StoreService } from 'src/app/services/store.service';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit, AfterViewInit {

    @Input() contend: slide = new slide()
    @Input() direction?: boolean = false
    @ViewChild('sourceImg') imageRef!: ElementRef

    counter: number = 0

    constructor(private store: StoreService) { 
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        if (typeof (this.contend.image) === 'string') {
            this.imageRef.nativeElement.src = this.contend.image
            this.checkImage(this.imageRef.nativeElement)
            window.onload = () => this.store.flag.next(true)
        }
        else {
            setInterval(() => this.changeImage(), 800)
        }
    }

    changeImage():void {
        this.imageRef.nativeElement.src = this.contend.image[this.counter]
        this.changeCounter()
    }

    changeCounter():void {
        this.counter++
        if (this.counter === this.contend.image.length) this.counter = 0
    }

    checkImage(element:HTMLImageElement):void {
        this.store.flag.subscribe(observer => {
            if(observer) {
                if(element.height < element.width){
                    element.style.width = '400px'
                    element.parentElement!.style.width = '400px'
                }
                this.store.flag.unsubscribe
            }
        })
    }
}
