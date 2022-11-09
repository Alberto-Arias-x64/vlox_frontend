import { Component, OnInit } from '@angular/core';
import { Data as Card } from 'src/app/models/card';
import { slide } from 'src/app/models/slide';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    data:slide = {
        title:'Canales de Atencion',
        contend:`
        Para la atención general a las solicitudes de nuestros clientes, Vlox ha habilitado los siguientes canales de atención.
        Por medio de estos, nuestros clientes y consumidores podrán adquirir nuestros servicios, recibir atención,
        obtener información, aclarar dudas, entre otros servicios.
    `,
        color:'#eee',
        image:'assets/images/contact.png'
    }
    
    contacts: Card[] = [
        {
            icon:'assets/images/icons/whatsapp.png',
            title:'Whatsapp',
            description:'Contacto directo atravez de la app mas popular de dispositivos moviles',
            button:'Contactar'
        },
        {
            icon:'assets/images/icons/mail.png',
            title:'Correo',
            description:'Escribenos un correo mandandonos tus propuestas',
            button:'Contactar'
        },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
